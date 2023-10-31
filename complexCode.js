// filename: complexCode.js

// This code demonstrates a complex system for managing and accessing user data using JavaScript.

// User class for creating user objects
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }
}

// Post class for creating post objects
class Post {
  constructor(id, userId, title, content) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.content = content;
  }
}

// Creating an array to store user objects
const users = [];

// Creating some dummy users
const user1 = new User(1, 'John Doe', 'john@example.com');
const user2 = new User(2, 'Jane Smith', 'jane@example.com');
const user3 = new User(3, 'Robert Johnson', 'robert@example.com');

users.push(user1, user2, user3);

// Creating some dummy posts
const post1 = new Post(1, 1, 'First Post', 'Hello World!');
const post2 = new Post(2, 1, 'Second Post', 'This is my second post.');
const post3 = new Post(3, 2, 'Hello', 'Nice to meet you all.');
const post4 = new Post(4, 3, 'Random Thoughts', 'Just sharing my thoughts.');

// Adding posts to users
user1.addPost(post1);
user1.addPost(post2);
user2.addPost(post3);
user3.addPost(post4);

console.log(users); // Printing all users with their posts to console