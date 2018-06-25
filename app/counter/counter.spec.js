import counter from './counter';

describe('Counter', () => {
    it('should increment state', () => {
        expect(
            counter(0, { type: 'INCREMENT' })
        ).toEqual(1);
    })

    it('should decrement state', () => {
        expect(
            counter(2, { type: 'DECREMENT' })
        ).toEqual(1);
    })

    it('should not change state if action is unkown', () => {
        expect(
            counter(2, { type: 'SOMETHING_ELSE' })
        ).toEqual(2);
    })

    it('should set init state to 0', () => {
        expect(
            counter(undefined, { })
        ).toEqual(0);
    })
})
