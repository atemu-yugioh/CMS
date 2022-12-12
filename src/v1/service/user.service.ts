import User, { UserDocument } from "../model/user.model";

class UserService {
  createUser = async (user: UserDocument) => {
    return await User.create(user);
  };

  validatePassword = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const user = await User.findOne({ email });

    if (!user) {
      return false;
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
      return false;
    }

    return user.toJSON();
  };
}

// const userService = {
//   createUser: (user: UserDocument) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         resolve(await User.create(user));
//       } catch (error) {
//         reject(error);
//       }
//     });
//   },

//   validatePassword: async ({
//     email,
//     password,
//   }: {
//     email: string;
//     password: string;
//   }) => {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return false;
//     }

//     const isValid = await user.comparePassword(password);

//     if (!isValid) {
//       return false;
//     }

//     return user.toJSON();
//   },
// };

export default UserService;
