
var database = (function () {
	
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        dbVersion = 1,
		db;
			
		//This line deletes the database - used for testing purposes
		//indexedDB.deleteDatabase("database");
		
		this.initializeDB = function(callback) {
		  if (window.indexedDB) {
			  console.log("IndexedDB support is there");
			}
			else {
			   alert("Indexed DB is not supported. Where are you trying to run this ? ");
			}
 
			// open the database
			// 1st parameter : Database name. We are using the name 'notesdb'
			// 2nd parameter is the version of the database.
			var request = indexedDB.open('database', dbVersion);
 
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
			   db = e.target.result;
 
			   if (db.objectStoreNames.contains("data")) {
			     db.deleteObjectStore("data");
			   }
 
			   // create a store named 'notes'
			   // 1st parameter is the store name
			   // 2nd parameter is the key field that we can specify here. Here we have opted for autoIncrement but it could be your
			   // own provided value also.
			   var objectStore = db.createObjectStore('data', { keyPath: 'id', autoIncrement: true });
			   console.log("The object store is: ", objectStore);
 
			   console.log("Object Store has been created");
			};
		};
				
		//Method for inserting a picture in IndexedDB; It first removes a picture if there are maximum pictures already stored;
		this.insertItem = function(item){
					
			// Open a transaction to the database
		    var transaction = db.transaction(["data"], "readwrite");
			console.log("Insert item to DB: ", db, transaction);
		    // Put the blob into the database
		   	var put = transaction.objectStore("data").put(item);

		};
				
		//Method for getting a picture by id
		this.getItemById = function(id, callback){
		  
		  callback = callback || function(){};	
          // Open a transaction to the database
          var transaction = db.transaction(["data"], "readwrite");
					
          // Retrieve the file that was just stored
          transaction.objectStore("data").get(id).onsuccess = function (event) {
              var item = event.target.result;
			  callback(item);
          };
		};
					
		//Method for getting all stored pictures from indexedDB	
		this.getAllItems = function(callback){
			console.log("The db is: ", db);
			callback = callback || function(){};
			var items = [];
			var dataObjectStore = db.transaction(["data"], "readwrite").objectStore("data");

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
				
		//Method for deleting the picture with the lowest id(the "older" picture) from idexedDB
		this.deleteItem = function(id, callback){
			
			callback = callback || function(){};		
			var request = db.transaction(["data"], "readwrite")
							.objectStore("data")
					        .delete(id);
			request.onsuccess = function(event) {
				callback();
			};
					
		};
	
		return this;
		
})();
