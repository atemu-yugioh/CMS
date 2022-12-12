import Session, { SessionDocument } from "../model/session.model";

export default class SessionService {
  createSession = async (userId: string, userAgent: string) => {
    const session = await Session.create({
      user: userId,
      user_agent: userAgent,
    });
    return session.toJSON();
  };

  updateSession = async (sessionId: string) => {
    const session = await Session.updateOne(
      { _id: sessionId },
      { valid: false },
      { returnOriginal: false }
    );

    return session;
  };
}

// const sessionService = {
//   createSession: async (userId: string, userAgent: string) => {
//     const session = await Session.create({
//       user: userId,
//       user_agent: userAgent,
//     });
//     return session.toJSON();
//   },

//   updateSession: async (sessionId: string) => {
//     const session = await Session.updateOne(
//       { _id: sessionId },
//       { valid: false },
//       { returnOriginal: false }
//     );

//     return session;
//   },
// };

// export default sessionService;
