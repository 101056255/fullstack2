const Hotel = require('./Hotel')
const User = require("./User");
const Booking =  require("./Booking");

exports.resolvers = {
    Query: {
        getHotel: () => {
            return Hotel.find({});
        },
        getHotelByName: (parent, args) => {
            return Hotel.find({"hotel_name": args.hotel_name})
        },
        getHotelByCity: (parent, args) => {
            return Hotel.find({"city": args.city})
        },
        getBookings: (parent, args) => {
            return Booking.find({})
        },
        getUser: (parent, args) => {
            return User.find({})
        }
    },

    Mutation: {
        addHotel: async (parent, args) => {

            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
            });
            return await newHotel.save();
        },

        addUser: async (parent, args) => {
            let newUser = new User({
                user_id: args.user_id,
                username: args.username,
                password: args.password,
                email: args.email
            });
            return await newUser.save()
        },

        createBooking: async (parent, args) => {
            function findUser(user) {
                User.countDocuments({"user_id": user}, ((err, count) => {
                    return count;
                }))
            }

            if(findUser(args.user_id) < 0)
            {
                throw new Error("User does not exist")
            }
            else
            {
                let newBooking = new Booking({
                    hotel_id: args.hotel_id,
                    booking_date: args.booking_date,
                    booking_start: args.booking_start,
                    booking_end: args.booking_end,
                    user_id: args.user_id
                })
                return await newBooking.save()
            }
        }
    }
}

