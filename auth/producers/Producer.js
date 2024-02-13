const amp = require('amqplib');
const RabbitConfig = require('../configs/RabbitConfig');

class Producer {
    constructor() {
        this.channel = null; // Initialize channel as null
    }

    async createChannel() {
        try {
            const connection = await amp.connect(RabbitConfig.rabbitMQ.url);
            this.channel = await connection.createChannel();
        } catch (err) {
            console.error({
                err: err,
                message: 'Error in createChannel'
            });
            throw err; // Propagate the error upwards
        }
    }

    async publishMessage(routingKey, message) {
        try {
            if (!this.channel) {
                await this.createChannel();
            }
            const exchangeName = RabbitConfig.rabbitMQ.exchangeName;
            // Ensure channel is available before calling assertExchange
            if (this.channel) {
                await this.channel.assertExchange(exchangeName, 'direct');
                await this.channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify({
                    logType: routingKey,
                    message: message,
                    dateTime: new Date()
                })));
                console.log(`The message ${message} is sent to exchange ${exchangeName}`);
            } else {
                throw new Error('Channel not available');
            }
        } catch (err) {
            console.error({
                err: err,
                message: 'Error in publishMessage'
            });
            throw err; // Propagate the error upwards
        }
    }
}

module.exports = Producer;
