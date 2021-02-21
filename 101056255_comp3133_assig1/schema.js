const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type Hotel {
       hotel_id: Int
       hotel_name: String
       street: String
       city: String
       postal_code: String
       price: Float
       email: String
    }

    type User {
       user_id: Int
       username: String
       password: String
       email: String
    }
    
    type Booking {
        hotel_id: Int
        booking_date: String
        booking_start: String
        booking_end: String
        user_id: Int
    }

    type Query {
      getHotel: [Hotel]
      getHotelByName(hotel_name: String!): [Hotel]  
      getHotelByCity(city: String!): [Hotel]
        
      getUser: [User]
      getUserByID(user_id: Int): User
      
      getBookings: [Booking]
    }

    type Mutation {
        addHotel (
            hotel_id: Int!
            hotel_name: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
        ): Hotel
        
        addUser (
            user_id: Int!
            username: String!
            password: String!
            email: String!
        ): User
        
        createBooking (
            hotel_id: Int!
            booking_date: String
            booking_start: String!
            booking_end: String!
            user_id: Int!
        ): Booking
    }    
`
