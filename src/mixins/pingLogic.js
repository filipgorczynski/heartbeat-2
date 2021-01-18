import Monitor from 'ping-monitor';

export default {
  created() {
    if (this.remote.monitoring) {
      this.createMonitor();
    }
  },

  destroyed() {
    this.destroyMonitor();
  },

  methods: {
    createMonitor() {
      this.monitor = new Monitor({
        website: this.remote.uri, // 'http://localhost:8080/health',
        interval: this.remote.interval / 60,
      });

      this.monitor.on('up', () => {
        console.log(`${this.remote.alias} is up`);
        this.currentStatus = 'online';
      });

      this.monitor.on('down', () => {
        console.warn(`${this.remote.alias} is down`);
        this.currentStatus = 'offline';
      });

      this.monitor.on('error', () => {
        // console.error(`${this.remote.alias} error`, err);
      });
    },
    destroyMonitor() {
      if (this.monitor) {
        this.monitor.stop();
      }
    },
  },
};
