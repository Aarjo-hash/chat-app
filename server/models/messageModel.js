const MessageSchema = mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: [ // [senderId, receiverId]
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    delivered: {
      type: Boolean,
      default: false, // for offline delivery tracking
    },
  },
  {
    timestamps: true,
  }
);
