MongoDB important commands
===========================

Displaying list of db
```
show dbs
(This will show only those which are having records, i.e. collections and documents)
```

Create db
```
user `dbName`
```

Pointing towards current db
```
db
```

Displaying collections inside a db
```
show collections;
db.getCollectionNames();
```

Create collections inside a db
```
db.createCollection("employee");
```

Inserting documents inside a collections
```
db.collectionName.insert({key1: value1}, {key2: value2});
db.collectionName.insertOne({}) // Inserting single document
db.collectionName.insertMany({}) // Inserting multiple document

```

To see the total no of records(documents) inserted
```
db.collectionName.find();

```

To show a db in pretty format
```
db.collectionName.find().pretty();

```

To fetch a particular record/document
```
db.collectionName.find({`specificKey`: `value`})

```

To count total no records/documents
```
db.collectionName.count();

```

To come out of mongoDB server
```
quit()

```

To clear console in mongoDB
```
command + K

```

Querying document with condition
--------------------------------------
Greater than or less than
```
db.collectionName.find({field: {$lte: value1}, field: {$gte: value2}})
- $lte => less than
- $gte => greater than

e.g.
db.tours.find({price: {$lte: 500}, rating: {$gte: 4.2}})

```

OR
```
db.collectionName.find({ $or: [ {field1: {$lte: value1}}, {field2: {$gte: value2}}]})

e.g.
db.tours.find({ $or: [ {price: {$lte: 500}}, {rating: {$gte: 4.8}}]})

```