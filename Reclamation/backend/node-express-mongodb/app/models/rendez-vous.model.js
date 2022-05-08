module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        route: String,
        name: String,
        surname: String,
        subject: String,
        claimText: String,
        date: String,
        status: String,
        responses: [{
          type: String
        }]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const RendezVous = mongoose.model("rendezvous", schema);
  return RendezVous;
};
