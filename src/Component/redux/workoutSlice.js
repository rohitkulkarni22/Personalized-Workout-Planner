import { createSlice } from '@reduxjs/toolkit';
import mock from '../../utils/mock.json';
const initialState = {
	loading: false,
	data: [],
	error: null,
};

export const workoutSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {
		getWorkout: (state, action) => {
			const { age, plan, gender, fitnessLevel, targetMuscle, duration } = action.payload;
			
			const myPrompt = `${plan} Make a ${duration} fitness plan for ${age} years ${gender} having ${fitnessLevel} fitness level targetting for ${targetMuscle}. `;
			console.log(myPrompt);

			const res = mock.filter((ele) => {
				return (
					ele.plan === plan &&
					ele.age === parseInt(age) &&
					ele.gender === gender &&
					ele.fitnessLevel === fitnessLevel &&
					ele.targetMuscle === targetMuscle &&
					ele.duration === duration
				);
			});
			console.log(res);
			state.data = res;
		},
	},
});

console.log(workoutSlice);

export const { getWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;
