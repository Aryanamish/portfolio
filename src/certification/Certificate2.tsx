import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Data from '../Data';
//@ts-expect-error
import {autoPlay} from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = Data.certificates;

function Certificate2() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: any) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{maxWidth: 500, flexGrow: 1}} className="mb-8 shadow-lg m-2 mt-0 ">
			<Paper
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: 140,
					pl: 2,
					bgcolor: '',
				}}>
				<div className="flex flex-col w-full justify-center items-center ">
					<Typography
						className="text-center p-2 pt-4"
						sx={{
							fontSize: '1.5rem',
							fontFamily: 'Unbounded, cursive',
						}}>
						{images[activeStep].label}
					</Typography>
					<p className="font-thin text-2xl flex justify-center items-center text-center">
						{images[activeStep].provider}
					</p>
				</div>
			</Paper>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents>
				{images.map((step, index) => (
					<div key={step.label} className="flex w-full justify-center">
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								component="img"
								sx={{
									height: 360,
									display: 'block',
									maxWidth: '100%',
									overflow: 'hidden',
									width: '100%',
								}}
								src={step.imagePath}
								alt={step.label}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button
						size="large"
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button
						size="large"
						onClick={handleBack}
						disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
					</Button>
				}
			/>
		</Box>
	);
}

export default Certificate2;
