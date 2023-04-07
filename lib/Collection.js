'use stric';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, options) {
    try {
      if (id) {
        return await this.model.findOne({ where: { id: id }, ...options });
      } else {
        return await this.model.findAll(options);
      }
    } catch (e) {
      console.log("collection class READ error: ", e);
    }
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (e) {
      console.log('collection CREATE error: ', e);
    }
  }

  async update(id, data) {
    try {
      let updatedRecord = await this.model.update(data, {
        where: {
          id: id
        }
      });
      return updatedRecord;
    } catch (e) {
      console.log('collection UPDATE error: ', e);
    }
  }

  async delete(id) {
    try {
      let number = await this.model.destroy({
        where: {
          id: id,
        }
      });
      return number;
    } catch (e) {
      console.log('collection DELETE error: ', e);
    }
  }
}

module.exports = Collection;