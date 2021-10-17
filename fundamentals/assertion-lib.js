const {sum, subtract} = require('./math')

/* 
	Throw error. Other tests not running. didn't know which implementation broken

	let result, expected

	result = sum(3, 7)
	expected = 10
	expect(result).toBe(expected)

	result = subtract(7, 3)
	expected = 4
	expect(result).toBe(expected)

*/ 

// Abstraction for expect(res).toBe(expected)
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

async function test(title, callback){
	try{
		await callback();
		console.log(`✅ ${title}`)
	}
	catch(error){
		console.error(`❌ ${title}`)
		console.error(`❌ ${error}`)
	}
}

test('sum numbers', async () => {
	const result = sum(3, 7)
	const expected = 10
	expect(result).toBe(expected)
})
test('subtract numbers', async () => {
	const result = subtract(7, 3)
	const expected = 4
	expect(result).toBe(expected)
})