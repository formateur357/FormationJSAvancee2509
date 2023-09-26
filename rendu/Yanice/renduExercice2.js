class Pool {
    constructor(length, width, height, outflow) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.outflow = outflow;
    }

    getVolumeOfPool(pool) {
        return (pool.length * pool.width * pool.height);
    }

    getFillingTime = (volume) => {
        return (volume * this.outflow)
    }

}

const pool1 = new Pool(10, 10, 10, 10);
console.log(pool1.getVolumeOfPool(pool1));
console.log(pool1.getFillingTime(pool1.getVolumeOfPool(pool1)));