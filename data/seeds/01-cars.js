const cars = [
    {
        vin: '1HGCM82633A400001',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'JTDKB20U48776543',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '5XXGN4A78FG123456',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}