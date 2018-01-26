const db  = require('../lib/db');

module.exports = {

  /**
   * Get all events
   */
  getAll: (req, res, ok) => {
    db.findAllEvents((err, events) => {
      if(!err){
        return res.status(200).json({ events: events });
      } else {
        return res.status(500).json({ error: err.message });
      }
    });
  }
};
