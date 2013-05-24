/**
 *     @param <object> {
 *        name:  <string>
 *        schema: <object>
 *        version: <int>
 *        debug: <bool>
 *        success: <function>
 *        error: <function>
 *     }
 */
function DB ($options) {
    var self = this,
        // private polyfils
        indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB,
        IDBDatabase = window.IDBDatabase || window.webkitIDBDatabase,
        IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction,
        // private properties
        _readWrite = IDBTransaction.readwrite || 'readwrite',
        _dbRequest,
        _dbName,
        _version,
        _schema,
        _debug,
        // private methods
        __call,
        __isArray,
        __log,
        __getTransaction,
        __assert,
        // class
        DBObject,
        // exception
        IndexedDBException;

    // Exception
    IndexedDBException = function (message) { 
        this.message = message; 
    };
    IndexedDBException.prototype.toString = function () { 
        return 'IndexedDBException: ' + this.message; 
    };
    
    // private functions
    __call = function ($func, $context, $args) {
        $func && ($func instanceof Function) && $func.apply($context, $args);
    };
    
    __isArray = function ($arr) {
        return (Object.prototype.toString.call($arr) === '[object Array]');
    };
    
    __log = function ($msg) {
        if (_debug && console && console.log) {  console.log($msg);  }
    };
    
    __getTransaction = function ($db, $store, $rw) {
        var trans;
        try { 
            trans = ($rw) ? $db.transaction($store, 'readwrite') : $db.transaction($store);
        } catch ($err) { __log($err.message); }
        if (!trans) {
            try { 
                trans = ($rw) ? $db.transaction([$store], _readWrite) : $db.transaction([$store]);
            } catch ($err) { __log($err.message); }
        }
        return trans;
    };
    
    __assert = function ($test, $msg) {
        if (!$test) { 
            throw new IndexedDBException($msg); 
        }
    };
    
    // validate options
    _dbName = '' + $options.name;
    _version = parseInt($options.version, 10);
    _schema = $options.schema;
    _debug = !!($options.debug);
            
    __assert(_dbName.length, 'Invalid parameter: name <string>');
    __assert(_version, 'Invalid parameter: version <int>');
    __assert(__isArray(_schema), 'Invalid parameter: schema <array>');
    
    // check support
    if (!indexedDB) {
        __call($options.error, self, [false, $e]);
        return false;
    }
    
    // request indexedDB
    _dbRequest = indexedDB.open(_dbName, _version);
    
    // request on error
    _dbRequest.onerror = function ($e) {
        __call($options.error, self, [true, $e]);
    };
    
    // request on upgrade
    _dbRequest.onupgradeneeded = function ($e) {
        var updb = $e.target.result,
            objectStore,
            item,
            index;
        for (var i = 0, ii = _schema.length; i < ii; i++) {
            item = _schema[i];
            try {
                objectStore = updb.createObjectStore(item.name, {keyPath: item.key});
            } catch ($err) { __log($err.message); }
            if (__isArray(item.indexes)) {
                for (var j = 0, jj = item.indexes.length; j < jj; j++) {
                    index = item.indexes[j];
                    try {
                        objectStore.createIndex(index.name, index.field, { 
                            unique:  !!(index.unique)
                        });
                    } catch ($err) { __log($err.message); }
                }
                __call($options.upgrade, self, [$e]);
            }
        }
    };
    
    // request on success
    _dbRequest.onsuccess = function ($e) {
        var idb = _dbRequest.result,
            db = new DBObject(idb);
        // some browsers do upgrading db here
        if (_version !== idb.version) {
            var setVersionRequest = idb.setVersion(_version);
            setVersionRequest.onerror = function ($e) {
                __call($options.upgradeError, self, [$e]);
            };
            setVersionRequest.onsuccess = function ($e) {
                var objectStore,
                    item,
                    index;
                for (var i = 0, ii = schema.length; i < ii; i++) {
                    item = schema[i];
                    try {
                        objectStore = idb.createObjectStore(item.name, {keyPath: item.key});
                    } catch ($err) { __log($err.message); }
                    if (__isArray(item.indexes)) {
                        for (var j = 0, jj = item.indexes.length; j < jj; j++) {
                            index = item.indexes[j];
                            try {
                                objectStore.createIndex(index.name, index.field, { 
                                    unique:  !!(index.unique)
                                });
                            } catch ($err) { __log($err.message); }
                        }
                        __call($options.upgrade, self, [$e]);
                    }
                }
                $e.target.transaction.oncomplete = function ($$e) {
                    __call($options.success, self, [db, $$e]);
                };
            }
        } else {
            __call($options.success, self, [db, $e]);
        }
    };

    // DBObject
    DBObject = function ($idb) {
        this.db = $idb;
    };
        
    /**
     *    @params <object> {
     *         store: <string>, 
     *         data: <array <object>>, 
     *         replace: <bool: *false*|true>,
     *         success: <function>,
     *         error: <function>
     *     }
     */
    DBObject.prototype.insert = function ($opts) {
        var _self = this,
            $store = $opts.store,
            $data = $opts.data,
            $repl = !!($opts.repl),
            trans = __getTransaction(this.db, $store, true),
            objectStore,
            request,
            added = [],
            failed = [],
            insert,
            checkDone;
        __assert(trans, 'Could not get Transaction inserting to ' + $store);
        objectStore = trans.objectStore($store);
        __assert(objectStore, 'Could not get ObjectStore inserting to ' + $store);
        checkDone = function ($e) {
            if ((added.length + failed.length) === ii) {
                __call($opts.error, _self, [added, failed, $e]);
            }
        };
        insert = function ($row) {
            request = ($repl) ? objectStore.put($row) : objectStore.add($row);
            request.onsuccess = function ($e) { 
                added.push($row);
                checkDone($e);
            };
            request.onerror = function ($e) { 
                failed.push($row);
                checkDone($e);
            };
        };
        for (var i = 0, ii = $data.length; i < ii; i++) {
            insert($data[i]);
        }
    };
        
    /**
     *    @params <object> {
     *         store: <string>, 
     *         id: <mixed>, 
     *         success: <function>,
     *         error: <function>
     *     }
     */
    DBObject.prototype.delete = function ($opts) {
        var _self = this,
            $store = $opts.store,
            $id = $opts.id,
            trans = __getTransaction(this.db, $store, true),
            objectStore,
            request;
        __assert(trans, 'Could not get Transaction deleting ' + $id + ' from ' + $store);
        objectStore = trans.objectStore($store);
        __assert(objectStore, 'Could not get ObjectStore deleting ' + $id + ' from ' + $store);
        request = objectStore.delete($id);
        request.onsuccess = function ($e) {
            __call($opts.success, _self, [$id, $e]);
        };
        request.onerror = function ($e) {
            __call($opts.error, _self, [$id, $e]);
        };
    };
    
    /**
     *    @params <object> {
     *         store: <string>, 
     *         id: <mixed>, 
     *         success: <function>,
     *         error: <function>
     *     }
     */
    DBObject.prototype.get = function ($opts) {
        var _self = this,
            $store = $opts.store,
            $id = $opts.id,
            trans = __getTransaction(this.db, $store),
            objectStore,
            request;
        __assert(trans, 'Could not get Transaction getting ' + $id + ' from ' + $store);
        objectStore = trans.objectStore($store);
        __assert(objectStore, 'Could not get ObjectStore getting ' + $id + ' from ' + $store);
        request = objectStore.get($id);
        request.onsuccess = function ($e) {
            __call($opts.success, _self, [request.result, $store, $e]);
        };
        request.onerror = function ($e) {
            __call($opts.error, _self, [$id, $store, $e]);
        };
    };
    
    /**
     *    @params <object> {
     *         store: <string>, 
     *         success: <function>,
     *         error: <function>
     *     }
     */
    DBObject.prototype.all = function ($opts) {
        var _self = this,
            $store = $opts.store,
            trans = __getTransaction(this.db, $store),
            objectStore,
            request,
            cursor,
            data = [];
        __assert(trans, 'Could not get Transaction getting all from ' + $store);
        objectStore = trans.objectStore($store);
        __assert(objectStore, 'Could not get ObjectStore getting all from ' + $store);
        request = objectStore.openCursor();
        request.onsuccess = function ($e) {
            cursor = $e.target.result;
            if (cursor) {
                data.push(cursor.value);
                cursor.continue();
            } else {
                __call($opts.success, _self, [data, $store, $e]);
            }
        };
        request.onerror = function ($e) {
            __call($opts.error, _self, [$store, $e]);
        };
    };
    
    /**
     *    @params <object> {
     *         store: <string>, 
     *         key: <string>, 
     *         value: <mixed>, 
     *         orderCol: <string>, 
     *         order: <enum: (*'asc'*|'desc')>, 
     *         limit: <int>, 
     *         success: <function>,
     *         error: <function>
     *     }
     */
    DBObject.prototype.filter = function ($opts) {
        var _self = this,
            $store = $opts.store,
            $key = $opts.key,
            $value = $opts.value,
            $order = $opts.order,
            $orderCol = $opts.orderCol,
            $limit = $opts.limit,
            trans = __getTransaction(this.db, $store),
            objectStore,
            request,
            index,
            keyRange,
            cursor,
            data = [];
        __assert(trans, 'Could not get Transaction filtering ' + $key + ' for ' + $value + ' from ' + $store);
        objectStore = trans.objectStore(store);
        __assert(objectStore, 'Could not get ObjectStore filtering ' + $key + ' for ' + $value + ' from ' + $store);
        index = objectStore.index($key);
        keyRange = IDBKeyRange.only($value);
        request = index.openCursor(keyRange);
        request.onsuccess = function ($e) {
            cursor = $e.target.result;
            if (cursor) {
                data.push(cursor.value);
                cursor.continue();
            } else {
                if ($order && $orderCol) {
                    data.sort(function (a, b) {
                        var aa = a[$orderCol],
                            bb = b[$orderCol];
                        return (aa < bb) ? -1 : ((aa > bb) ? 1 : 0);
                    });
                    if ($order === 'desc') { 
                        data.reverse(); 
                    }
                }
                if ($limit) {
                    data = data.slice(0, $limit);
                }
                __call($opts.success, _self, [data, $store, $e]);
            }
        };
        request.onerror = function ($e) {
            __call($opts.error, _self, [$store, $e]);
        };
    };
    
    /**
     *    @params <object> {
     *         store: <string>, 
     *         success: <function>,
     *         error: <function>
     *     }
     */
    DBObject.prototype.clear = function ($opts) {
        var _self = this,
            $store = $opts.store,
            trans = __getTransaction(this.db, $store, true),
            objectStore,
            request;
        __assert(trans, 'Could not get Transaction clearing ' + $store);
        objectStore = trans.objectStore($store);
        __assert(objectStore, 'Could not get ObjectStore clearing ' + $store);
        request = objectStore.clear();
        request.onsuccess = function ($e) {
            __call($opts.success, _self, [$store, $e]);
        };
        request.onerror = function ($e) {
            __call($opts.error, _self, [$store, $e]);
        };
    };
    
    /**
     *    @params <object> {
     *         store: <string>, 
     *         key: <string>, 
     *         value: <mixed>, 
     *         success: <function>,
     *         error: <function>
     *     }
     */
    DBObject.prototype.count = function ($opts) {
        var _self = this,
            $store = $opts.store,
            $key = $opts.key,
            $value = $opts.value,
            trans = __getTransaction(this.db, $store, true),
            objectStore,
            request,
            count = 0,
            index,
            keyRange;
        __assert(trans, 'Could not get Transaction counting ' + $store);
        objectStore = trans.objectStore($store);
        __assert(objectStore, 'Could not get ObjectStore counting ' + $store);
        if ($key && $value) {
            index = objectStore.index($key);
            keyRange = IDBKeyRange.only($value);
            request = index.count(keyRange);
        } else {
            request = objectStore.count();
        }
        request.onsuccess = function ($e) {
            __call($opts.success, _self, [$e.target.result, $store, $e]);
        };
        request.onerror = function (e) {
            __call($opts.error, _self, [$store, $e]);
        };
    };
};
