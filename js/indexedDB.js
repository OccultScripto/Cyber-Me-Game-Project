
var database = (function () {
	
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        dbVersion = 1,
		db;
			
		//This line deletes the database - used for testing purposes
		//indexedDB.deleteDatabase("cyberme");
		
		this.stores = {
			work: "work",
			food: "food",
			clothes: "clothes",
			bills: "bills",
			others: "others",
			events: "events"
		};
		this.currentStore = this.stores.work;
		
		this.initializeDB = function(callback) {
			callback = callback || function(){};
		  if (window.indexedDB) {
			  console.log("IndexedDB support is there");
			}
			else {
			   alert("Indexed DB is not supported. Where are you trying to run this ? ");
			}
 
			// open the database
			// 1st parameter : Database name. We are using the name 'notesdb'
			// 2nd parameter is the version of the database.
			var request = indexedDB.open('cyberme', dbVersion);
 
			request.onsuccess = function (e) {
			  // e.target.result has the connection to the database
			  db = e.target.result;
			  console.log("Success initializing de DB ", db);
			  callback();
			  //Alternately, if you want - you can retrieve all the items
			};
 
			request.onerror = function (e) {
			   console.log(e);
			};
 
			// this will fire when the version of the database changes
			// We can only create Object stores in a versionchange transaction.
			request.onupgradeneeded = function (e) {
			   // e.target.result holds the connection to database
				 console.log("cleared all stores!!!");
			   db = e.target.result;
 
			   if(db.objectStoreNames.contains(database.stores.work)) {
			     db.deleteObjectStore(this.stores.work);
				 }
			   if(db.objectStoreNames.contains(database.stores.food)) {
			     db.deleteObjectStore(this.stores.food);
				 }
			   if(db.objectStoreNames.contains(database.stores.clothes)) {
			     db.deleteObjectStore(this.stores.clothes);
				 }
			   if(db.objectStoreNames.contains(database.stores.bills)) {
			     db.deleteObjectStore(this.stores.bills);
				 }
			   if(db.objectStoreNames.contains(database.stores.others)) {
			     db.deleteObjectStore(this.stores.others);
				 }
			   if(db.objectStoreNames.contains(database.stores.events)) {
			     db.deleteObjectStore(this.stores.events);
				 }
 
			   // create a store named 'notes'
			   // 1st parameter is the store name
			   // 2nd parameter is the key field that we can specify here. Here we have opted for autoIncrement but it could be your
			   // own provided value also.
			   var objectStore = db.createObjectStore(database.stores.work, { keyPath: 'id', autoIncrement: true });
				 var objectStore = db.createObjectStore(database.stores.food, { keyPath: 'id', autoIncrement: true });
				 var objectStore = db.createObjectStore(database.stores.clothes, { keyPath: 'id', autoIncrement: true });
				 var objectStore = db.createObjectStore(database.stores.bills, { keyPath: 'id', autoIncrement: true });
				 var objectStore = db.createObjectStore(database.stores.others, { keyPath: 'id', autoIncrement: true });
				 var objectStore = db.createObjectStore(database.stores.events, { keyPath: 'id', autoIncrement: true });
 
			   console.log("Object Store has been created");
			};
		};
				
		//Method for inserting an item to indexedDB
		this.insertItem = function(item){
					
			// Open a transaction to the database
		    var transaction = db.transaction([database.currentStore], "readwrite");
			console.log("Insert item to DB: ", db, transaction);
		    // Put the blob into the database
		   	var add = transaction.objectStore(database.currentStore).add(item);

		};
				
		//Method for getting a picture by id
		this.getItemById = function(id,callback){
		  callback = callback || function(){};	
          // Open a transaction to the database
          var returnValue = null;
          var transaction = db.transaction([database.currentStore], "readwrite");
					
          // Retrieve the file that was just stored
          transaction.objectStore(database.currentStore).get(id).onsuccess = function (event) {
              var item = event.target.result;
  			  console.log("Got item! ", item);
			  callback(item);
          };
		};
					
		//Method for getting all stored pictures from indexedDB	
		this.getAllItems = function(callback){
			console.log("The db is: ", this.currentStore, db);
			callback = callback || function(){};
			var items = [];
			var dataObjectStore = db.transaction([database.currentStore], "readwrite").objectStore(database.currentStore);

			dataObjectStore.openCursor().onsuccess = function(event) {
				var cursor = event.target.result;
				if (cursor) {
					items.push({key: cursor.key, value: cursor.value});
					    cursor.continue();
				}
				else {
						callback(items);
					  }
			};
		};
		//Method for updating a record
		this.updateItem = function(key, newItem){
			var self = this;
			// Open a transaction to the database
            var transaction = db.transaction([database.currentStore], "readwrite");
			//alert("Updating item with: " + newItem.picture);
            // Retrieve the file that was just stored
            transaction.objectStore(database.currentStore).get(key).onsuccess = function (event) {
                var item = event.target.result;
				console.log("Old Item", item);
				console.log("New Item", newItem);
				for(var i in newItem){
					//alert("The id is : " + typeof key);
					item[i] = newItem[i];
				}
				var update = transaction.objectStore(database.currentStore).put(item);
			};
		};
				
		//Method for deleting the picture with the lowest id(the "older" picture) from idexedDB
		this.deleteItem = function(id, callback){
			callback = callback || function(){};
			var requestTest = db.transaction([database.currentStore], "readwrite").objectStore(database.currentStore);
			console.log("Delete item: ", typeof id, database.currentStore, callback, requestTest);		
			var request = db.transaction([database.currentStore], "readwrite")
							.objectStore(database.currentStore)
					        .delete(id);
			request.onsuccess = function(event) {
				callback();
			};
					
		};
	
		return this;
		
})();