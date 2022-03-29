
class Statistics {

    constructor(ages) {
        this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    }

    getCount() {
        let count = this.ages.length
        return count
    }

    getSum() {
        let sum = this.ages.reduce((acc, cur) => cur + acc)

        return sum
    }

    getMin() {
        return Math.min(...this.ages)
    }
    
    getMax() {
        return Math.max(...this.ages)
    }
    
    getRange() {
        return this.getMax() - this.getMin()
    }

    getMean() {
        return this.getSum() / this.getCount()
    }

    getMedian() {
        let orderedAges = this.ages.sort()
        let medianIndex = Math.round(this.getCount() / 2)

        return orderedAges[medianIndex]
    }

    getMode() {

        let result = {'mode': 0, 'count': 0}
        let currentCount;

        this.ages.forEach((element) => {
            
            currentCount = 0

            for(var i=0; i < this.ages.length; i++) {
                if (this.ages[i] == element) {
                    currentCount++
                }
            }

            if (currentCount > result.count) {
                result.mode = element
                result.count = currentCount
            }
            
        })

        return result
    }

    getVariance() {
        
        let variance = Math.round(this.ages.reduce((acc, cur) => 
        (acc + Math.pow(cur - this.getMean(), 2) )))
        / (this.getCount())

        return variance
    }

    getStandardDeviation() {
        return Math.round(Math.sqrt(this.getVariance()))
    }

    // frequência relativa
    getFrequencyDistribution() {

        const frequencies = []
        let frequency;

        this.ages.forEach((element, i) => {

            let result = this.ages.filter((age) => age == element)

            frequency = (result.length / this.getCount()) * 100

            if (!frequencies.includes(element)) {
                frequencies.push(`(${frequency}% of ${element})`)
            }
        })

        return frequencies
    }

    describe() {
        console.log(`Count: ${statistics.getCount()}`)
        console.log(`Sum: ${statistics.getSum()}`)
        console.log(`Min: ${statistics.getMin()}`)
        console.log(`Max: ${statistics.getMax()}`)
        console.log(`Range: ${statistics.getRange()}`)
        console.log(`Mean: ${statistics.getMean()}`)
        console.log(`Median: ${statistics.getMedian()}`)
        console.log(`Mode: ${statistics.getMode()}`)
        console.log(`Variance: ${statistics.getVariance()}`)
        console.log(`Stardard Deviation: ${statistics.getStandardDeviation()}`)
        console.log(`Frequency Distribution: ${statistics.getFrequencyDistribution()}`)
    }

}

const statistics = new Statistics()
statistics.describe()
// console.log(statistics.getCount())
// console.log(statistics.getSum())
// console.log(statistics.getMin())
// console.log(statistics.getMax())
// console.log(statistics.getRange())
// console.log(statistics.getMean())
// console.log(statistics.getMedian())
// console.log(statistics.getMode())
// console.log(statistics.getVariance())
// console.log(statistics.getStandardDeviation())
// console.log(statistics.getFrequencyDistribution())

