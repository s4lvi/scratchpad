def mdp(states):
		output = 1
		print('running mdp')
		print('N:', len(states), 'isBadSide:', states, 'Output:',output)
		return output


def test(states, expected):
    actual = mdp(states)
    print('test', 'succeeded' if actual == expected else 'failed', '- expected:', expected, 'actual:', actual, '\n')

def test_runner():
    state1 = [1,jnj1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0]
    result1 = 7.3799
    test(state1, result1)

    state2 = [1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0]
    result2 = 6.314
    test(state2, result2)

    state3 = [1,1,1,0,0,0]
    result3 =2.58333
    test(state3, result3)

test_runner()
