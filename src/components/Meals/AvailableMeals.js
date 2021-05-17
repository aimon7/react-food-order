import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import {useEffect, useState} from "react";

function AvailableMeals() {
    const [meals, setMeals] = useState([]);

    useEffect( () => {
        const fetchMeals = async () => {
            const response = await fetch(process.env.REACT_APP_FIREBASE_URL);
            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals);
        }

        fetchMeals();
    }, [])


    const mealsList = meals.map(meal => {
        return <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description} />
    });

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;
