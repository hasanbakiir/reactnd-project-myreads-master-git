# reactnd-project-myreads-master-git
hasanbakiir


# MyReads Project App:
is an experiance to understanding of the basic structure and operation of a React-based app.


# Book Tracking
A book app that allows to select and categorize books that user have read, are currently reading, or want to read.


## How to start

1.  Open Own terminal then write into these follows:
 # git clone https://github.com/hasanbakiir/reactnd-project-myreads.git

2. Then 
npm i


3. Once the dependencies have been installed, can Strat the app

# npm start



4. After Runing start will open a defualt brower and be like this 
 http://localhost:3000/ 

 in case would refresh your app try again with 
 # npm start 
 will offer you Y/N then press Y
 rowser window should automatically open displaying the app
 # http://localhost:3001/ 
 and so on 
 

# How to Use a Book App

- Books are sorted into three categories: 
Currently Reading, 
Want to Read 
& 
Read
- To change a book's category or remove a book from the list, 
click on the green button on the book cover

# `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

# `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

# `search(query, maxResults)`
* query: `<String>`
# maxResults: 
`<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
# Returns a Promise which resolves to a JSON object containing a collection of book objects.

# These books do not 
know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

# Very Important
* if find some errors please try to use versions which recommended

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

# Here Search Terms
`Android`, `Art`, `Artificial Intelligence`, `Astronomy`, `Austen`, `Baseball`, `Basketball`, `Bhagat`, `Biography`, `Brief`, `Business`, `Camus`, `Cervantes`, `Christie`, `Classics`, `Comics`, `Cook`, `Cricket`, `Cycling`, `Desai`, `Design`, `Development`, `Digital Marketing`, `Drama`, `Drawing`, `Dumas`, `Education`, `Everything`, `Fantasy`, `Film`, `Finance`, `First`, `Fitness`, `Football`, `Future`, `Games`, `Gandhi`, `History`, `History`, `Homer`, `Horror`, `Hugo`, `Ibsen`, `Journey`, `Kafka`, `King`, `Lahiri`, `Larsson`, `Learn`, `Literary Fiction`, `Make`, `Manage`, `Marquez`, `Money`, `Mystery`, `Negotiate`, `Painting`, `Philosophy`, `Photography`, `Poetry`, `Production`, `Program Javascript`, `Programming`, `React`, `Redux`, `River`, `Robotics`, `Rowling`, `Satire`, `Science Fiction`, `Shakespeare`, `Singh`, `Swimming`, `Tale`, `Thrun`, `Time`, `Tolstoy`, `Travel`, `Ultimate`, `Virtual Reality`, `Web Development`, `iOS`
project licensed for studding terms 
end
