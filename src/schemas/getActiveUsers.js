export default {
  type: 'object',
  properties: {
    client: {
      type: 'string',
      description: 'Unique identifier for the client - allows filtering of messages by the client',
      enum: ['goodbot-ttl', 'client-rvrb']
    }
  },
  additionalProperties: true
}
