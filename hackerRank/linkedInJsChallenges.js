// linked in course js 
// https://www.linkedin.com/learning/javascript-code-challenges?courseClaim=AQHOGdx7u6Ls3gAAAXz8twsiAS-53z1_xjxVh3vtFFJHnnzB1WITa68O8ZnmqcXFB734uNZbOiPErO3zUmxx_6P5BFVYBj-9eKhtpyRzO_W_PLwExtHJMdmQT7SouhG19PGMOQNTswvcH9q22KqZB_lFGmzZV6LfGPfAeoETUP8yPQHavYehTrrF3w5A8_8-xd_UrwEdAclG_UxLG3eR_OY80bIn8UMOPphXV5NKQTlJoaUTK4v-ZApvyw5JkEQTuuAA2exsisj0pnlZJOchRyUSRv_l1bz2RtSOf_RFZ9c5u8t8y3l9WDGAwRlV3CUIkcpUNVdJ4SBsgTFyohy7qEpJP3mpXz7JBbhmo_syzmVHeQynHbP3_ner4rcGO9U686_nVNWB5y1Ut53mKpwFRuPz9I04I-oop6uBYN5MmrCqUuqMFV6I1sx51lnkaNkCW0LG1cpZE6_Bx7bsJG8YjXcrWU7ZNkYp5zjo7seBIcAUrG9jwiR0wxxOhRB2AkAUFRB1jP1K8MDunmYkgRjfUCQtymD9ENIlxoiErkeuP3FzbcDu_8iP2MMioDdkk8F6uHDiDe9XlT-vVCAcPZzPWhIGO0vC7mCg4678o_txUMBJlCj0c-EtNhD1nM61TRr2tW9ZeG8hwijz3EAOXoVEtmnUpEcEqICIk4HBX2H3kbVnvAn7-kGg-1YNPDwNDlsfSBvG&trk=feed-share_course_title_learning&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BJkM9wclcS4%2B7%2FFGeS1ycbQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_detail_base-viewCourse&lici=IQ2aHMjbT12MMLmHfw9CCA%3D%3D

// // 1 class syntax
// class BookStore {

//   constructor(title, author, isbn, numCopies) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.numCopies = numCopies;
//   }

//   setNumCopies(numCopies){
//       this.numCopies = numCopies
//   }
//   getNumCopies(){
//       return this.numCopies
//   }

//   getAvailability(){
//       const qty = this.getNumCopies()
//       if( qty < 0 ) return 'out of stock'
//       return qty < 10 ? 'low stock' : 'in stock'
//   }
//   sell(numSold = 1){
//     if(this.numCopies >= numSold){
//         this.setNumCopies( this.getNumCopies() - numSold )
//         return true
//     }
//     return false
//   }
//   restock(numCopies= 5){
//     this.setNumCopies(this.getNumCopies() + numCopies)
//   }

// }

// const store1 = new BookStore('clean coder', "Uncle Bob", "H1232356", 100)
// console.log(store1. getAvailability())
// store1.sell(1)
// store1.sell(99)
// store1.restock(1)
// console.log(store1)


// // 2 function syntax
// function Movie(title, director, genre, releaseYear, rating){
//     this.title = title
//     this.director = director
//     this.genre = genre
//     this.releaseYear =  releaseYear
//     this.rating = rating
// }

// Movie.prototype.getOverview = function(){
//     console.log(`${this.title}, a ${this.genre} fil directed by ${this.director} was released in ${this.releaseYear}. \
// It  received a rating of ${this.rating}.`)
// }

// const matrix = new Movie('Matrix', 'Washoski..', 'fiction', '1999', '9.3')
// matrix.getOverview()
// // console.log(matrix)

//// 3
// const dishes = [
//     {
//         name: "plato 1",
//         vegetarian: true
//     },
//     {
//         name: "Espaguetties",
//         vegetarian: false
//     }
// ]

// console.log(dishes)
// const vegetarianMenu = dishes.filter( el => el.vegetarian)
// console.log(vegetarianMenu)


// // 4
// class BookStore {

//   constructor(title, author, isbn, numCopies, edition) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.numCopies = numCopies;
//   }

//   setNumCopies(numCopies){
//       this.numCopies = numCopies
//   }
//   getNumCopies(){
//       return this.numCopies
//   }

//   getAvailability(){
//       const qty = this.getNumCopies()
//       if( qty < 0 ) return 'out of stock'
//       return qty < 10 ? 'low stock' : 'in stock'
//   }
//   sell(numSold = 1){
//     if(this.numCopies >= numSold){
//         this.setNumCopies( this.getNumCopies() - numSold )
//         return true
//     }
//     return false
//   }
//   restock(numCopies= 5){
//     this.setNumCopies(this.getNumCopies() + numCopies)
//   }
// }

// class TechnicalBook extends BookStore{
//     constructor(title, author, isbn, numCopies, edition){
//         super(title, author, isbn, numCopies)
//         this.edition = edition
//     }
//     getEdition (){
//         return `The current version of this book is ${this.edition}`
//     }
// }

// const bookCleanCode = new TechnicalBook('clean coder', "Uncle Bob", "H1232356", 100, '2da')
// console.log(bookCleanCode.getEdition())

// // COFFE calculations
// const qtyCoffees = [2,3,1,5]
// const priceByCoffee = 1.25

// const totalAccount = (arr) => arr.reduce( (acum, el) => acum + el )
// const total = totalAccount(qtyCoffees)
// console.log(`El total es ${total * priceByCoffee}`)


// // Food truck menu
// const vendor1 = ['pizza','pasta']
// const vendor2 = ['pizza','calzones']
// const vendor3 = ['lobster']
// const vendor4 = ['calzones']

// // make a new menu without duplicated dishes
// console.log([... new Set( vendor1.concat(vendor2, vendor3, vendor4))] )



// // String permutation
// const numPermutations = (word) => {

//     let total
//     for (let i = 1, len=word.length; i <= len; i++) {
        
//         if(total == undefined){
//             total = i
//             continue
//         }
//         total *= i
//     }
//     return total
// }


// // String permutation - recursive function
// function numPermutationsRecursive(word, index=1) {

//     // stop case
//     if(index === word.length)
//         return index
    
//     return index * numPermutationsRecursive(word, index+1)
// }

// console.log(numPermutations('hello'))
// console.log(numPermutationsRecursive('hello'))


