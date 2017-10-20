//Remove the try-catch blocks using this pupper
//stolen from Cisco because he is senpai

exports.catchErrors = (action) => {
  return (req, res, next) => {
    action(req, res).catch(next)
  }
}