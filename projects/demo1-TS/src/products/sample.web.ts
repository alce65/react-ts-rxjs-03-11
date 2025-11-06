class Sample {

    data: string;

    constructor() {
        this.data = 'Sample Data';
    }
    handleClick() {
        console.log('Sample clicked', this.data );
    }
}

const sample = new Sample();

document
    .querySelector('#sampleBtn')
    ?.addEventListener('click', sample.handleClick.bind(sample));
