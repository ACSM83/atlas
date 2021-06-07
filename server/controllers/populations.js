import pool from '../db/index.js';

export const getPopulations = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw errconsole.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT
                            countries_id_country 
                            year, 
                            country_name, 
                            total_population, 
                            total_male, 
                            total_female, 
                            total_active, 
                            total_families, 
                            families_with_internet, 
                            high_degree_students_total, 
                            high_degree_students_tic, 
                            high_degree_students_tic_male, 
                            high_degree_students_tic_female, 
                            internet_signatures, 
                            total_companies, 
                            companies_with_computer, 
                            companies_with_internet, 
                            companies_with_website, 
                            computer_use_basic_education, 
                            computer_use_high_school, 
                            computer_use_university, 
                            internet_use_basic_education, 
                            internet_use_high_school, 
                            internet_use_university, 
                            computer_use_male, 
                            computer_use_female, 
                            internet_use_male, 
                            internet_use_female, 
                            fixed_network, 
                            mobile_network
                        FROM 
                            population_infrastructures
                        INNER JOIN 
                            countries ON id_country = countries_id_country
                        ORDER BY 
                            year`, 
                        (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const createPopulation = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        const params = req.body;

        connection.query('INSERT INTO population_infrastructures SET ?', params, (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Population from ${params.countries_id_country} has been added.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const getPopulation = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        connection.query(`SELECT 
                            year, 
                            country_name, 
                            total_population, 
                            total_male, 
                            total_female, 
                            total_active, 
                            total_families, 
                            families_with_internet, 
                            high_degree_students_total, 
                            high_degree_students_tic, 
                            high_degree_students_tic_male, 
                            high_degree_students_tic_female, 
                            internet_signatures, 
                            total_companies, 
                            companies_with_computer, 
                            companies_with_internet, 
                            companies_with_website, 
                            computer_use_basic_education, 
                            computer_use_high_school, 
                            computer_use_university, 
                            internet_use_basic_education, 
                            internet_use_high_school, 
                            internet_use_university, 
                            computer_use_male, 
                            computer_use_female, 
                            internet_use_male, 
                            internet_use_female, 
                            fixed_network, 
                            mobile_network
                        FROM 
                            population_infrastructures
                        INNER JOIN 
                            countries ON id_country = countries_id_country
                        WHERE 
                            countries_id_country = ?`, [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

export const deletePopulation = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        connection.query(`DELETE FROM 
                            population_infrastructures
                        WHERE (countries_id_country, year) in ((?, ?))`, [req.params.id, req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Application with the ID ${[req.params.id]} has been deleted.`)
            } else {
                console.log(err)
            }
        })
    })
}

export const updatePopulation = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.thredId}`)

        const {year, 
            total_population, 
            total_male, 
            total_female, 
            active_male, 
            active_female, 
            total_families, 
            families_with_internet,
            high_degree_students_total,
            high_degree_students_tic,
            high_degree_students_tic_male,
            high_degree_students_tic_female,
            internet_signatures,
            total_companies,
            companies_with_computer,
            companies_with_internet,
            companies_with_website,
            computer_use_basic_education,
            computer_use_high_school,
            computer_use_university,
            internet_use_basic_education,
            internet_use_high_school,
            internet_use_university,
            computer_use_male,
            computer_use_female,
            internet_use_male,
            internet_use_female,
            fixed_network,
            mobile_network} = req.body;

        connection.query(`UPDATE 
                            population_infrastructures 
                        SET 
                            year = ?, 
                            total_population = ?, 
                            total_male = ?, 
                            total_female = ?, 
                            active_male = ?, 
                            active_female = ?, 
                            total_families = ?, 
                            families_with_internet = ?,
                            high_degree_students_total = ?,
                            high_degree_students_tic = ?,
                            high_degree_students_tic_male = ?,
                            high_degree_students_tic_female = ?,
                            internet_signatures = ?,
                            total_companies = ?,
                            companies_with_computer = ?,
                            companies_with_internet = ?,
                            companies_with_website = ?,
                            computer_use_basic_education = ?,
                            computer_use_high_school = ?,
                            computer_use_university = ?,
                            internet_use_basic_education = ?,
                            internet_use_high_school = ?,
                            internet_use_university = ?,
                            computer_use_male = ?,
                            computer_use_female = ?,
                            internet_use_male = ?,
                            internet_use_female = ?,
                            fixed_network = ?,
                            mobile_network = ?, 
                        WHERE countries_id_country = ?`, 
                        [
                            year, 
                            total_population, 
                            total_male, 
                            total_female, 
                            active_male, 
                            active_female, 
                            total_families, 
                            families_with_internet,
                            high_degree_students_total,
                            high_degree_students_tic,
                            high_degree_students_tic_male,
                            high_degree_students_tic_female,
                            internet_signatures,
                            total_companies,
                            companies_with_computer,
                            companies_with_internet,
                            companies_with_website,
                            computer_use_basic_education,
                            computer_use_high_school,
                            computer_use_university,
                            internet_use_basic_education,
                            internet_use_high_school,
                            internet_use_university,
                            computer_use_male,
                            computer_use_female,
                            internet_use_male,
                            internet_use_female,
                            fixed_network,
                            mobile_network], (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Population from ${country_name} has been updated.`)
            } else {
                console.log(err)
            }
        })
    })
}