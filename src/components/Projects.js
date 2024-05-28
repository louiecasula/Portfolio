import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import LingosphereV1 from '../images/LingosphereV1.JPG';
import LingosphereV2 from '../images/LingosphereV2.JPG';
import Calculator from '../images/Calculator.JPG';
import EtchASketch from '../images/EtchASketch.JPG';
import YeeChat from '../images/YeeChat.JPG';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Lingosphere V2',
    tech: ['Java', 'Spring Boot', 'React'],
    links: ['https://github.com/louiecasula/lingosphere-V2'],
    imgPath: LingosphereV2,
  },
  {
    label: 'YeeChat',
    tech: ['Java', 'Spring Boot', 'React'],
    links: ['https://github.com/louiecasula/YeeChat'],
    imgPath: YeeChat,
  },
  {
    label: 'Calculator',
    tech: ['JavaScript', 'HTML', 'CSS'],
    links: ['https://github.com/louiecasula/calculator', 'https://louiecasula.github.io/calculator/'],
    imgPath: Calculator,
  },
  {
    label: 'Etch-A-Sketch',
    tech: ['JavaScript', 'HTML', 'CSS'],
    links: ['https://github.com/louiecasula/etch-a-sketch', 'https://louiecasula.github.io/etch-a-sketch/'],
    imgPath: EtchASketch,
  },
  {
    label: 'Lingosphere V1',
    tech: ['Python'],
    links: ['https://github.com/louiecasula/lingosphere'],
    imgPath: LingosphereV1,
  },
];

function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, border: 'solid black 3px', borderRadius: '6px' }}>
        <Paper
            square
            elevation={1}
            sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: '#00000068',
            }}
        >
            <Typography sx={{ color: 'white' }}>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {images.map((step, index) => (
            <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                    height: 510,
                    display: 'block',
                    maxWidth: 800,
                    overflow: 'hidden',
                    width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                />
                ) : null}
            </div>
            ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            sx={{ bgcolor: '#00000068' }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                sx={{ color: 'white' }}
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button sx={{ color: 'white' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Back
            </Button>
            }
        />
    </Box>
  );
}

export default Projects;
