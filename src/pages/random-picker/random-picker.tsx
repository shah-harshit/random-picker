import { Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import isString from 'lodash/isString';
import React, { useEffect, useState } from 'react';

const generateRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomNumberWithExclusion = (min: number, max: number, list: Array<number>): number => {
    const random = generateRandomNumber(min, max);
    if (!list.includes(random)) {

        return random;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return generateRandomNumberWithExclusion(min, max, list);
};

export const RandomPickerPage = () => {
    const [startValue, setStartValue] = useState<number>(1);
    const [endValue, setEndValue] = useState<number>(10);
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [repeat, setRepeat] = useState<boolean>(true);
    const [randomNumberList, setRandomNumberList] = useState<Array<number>>([]);
    const areValuesInvalid = endValue <= startValue

    useEffect(() => {
        const random = localStorage.getItem('randomNumber');
        const randomList = localStorage.getItem('randomNumberList')?.split(', ').map(val => Number(val)) || [];
        const getRepeat = localStorage.getItem('repeat');
        const start = localStorage.getItem('startNumber')
        const end = localStorage.getItem('endNumber')
        !start && localStorage.setItem('startNumber', '1')
        !end && localStorage.setItem('endNumber', '10')
        !getRepeat && localStorage.setItem('repeat', 'true')
        setStartValue(isString(start) ? Number(start) : 1);
        setEndValue(isString(end) ? Number(end) : 10)
        setRandomNumber(isString(random) ? Number(random) : null);
        setRandomNumberList(randomList)
        setRepeat(getRepeat ? getRepeat === 'true' : true);
    }, [])


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, component: string) => {
        const value = event.target.value;

        switch (component) {
            case 'start':
                setStartValue(Number(value));
                localStorage.setItem('startNumber', value)
                break;
            case 'end':
                setEndValue(Number(value));
                localStorage.setItem('endNumber', value)
                break;
            default:
                return;
        }
    }

    const handleGenerate = () => {
        if (repeat) {
            const random = generateRandomNumber(startValue, endValue)
            setRandomNumber(random);
            localStorage.setItem('randomNumber', String(random));
        } else {
            const random = generateRandomNumberWithExclusion(startValue, endValue, randomNumberList);
            const newList = [...randomNumberList, random]
            setRandomNumberList(newList)
            localStorage.setItem('randomNumberList', newList.join(', '));
        }

    }

    const handleReset = () => {
        localStorage.removeItem('randomNumber');
        localStorage.removeItem('randomNumberList');
        localStorage.setItem('repeat', 'true');
        localStorage.setItem('startNumber', '1')
        localStorage.setItem('endNumber', '10');
        setRepeat(true);
        setStartValue(1);
        setEndValue(10);
        setRandomNumber(null);
        setRandomNumberList([]);
    }

    return <Grid container spacing={3} flexDirection="column">
        <Grid item>
            <Typography variant='h4'>
                Random Picker
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="body2" marginBottom={1}>
                Closing the page will <b>Reset</b> the data.
            </Typography>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={repeat}
                onChange={() => {
                    setRepeat((r) => !r);
                    localStorage.setItem('repeat', String(!repeat));
                }}
            >
                <FormControlLabel value={true} control={<Radio />} label="Repeat" />
                <FormControlLabel value={false} control={<Radio />} label="Do Not Repeat" />
            </RadioGroup>
        </Grid>
        <Grid container item spacing={3}>
            <Grid item sm={5} xs={5}>
                <TextField
                    error={areValuesInvalid}
                    label="Start number"
                    onChange={(e) => handleChange(e, 'start')}
                    type="number"
                    value={startValue}
                    variant="outlined"
                    helperText={areValuesInvalid ? 'End value cannot be less than start value' : undefined}
                />
            </Grid>
            <Grid item sm={5} xs={5}>
                <TextField
                    error={areValuesInvalid}
                    helperText={areValuesInvalid ? 'End value cannot be less than start value' : undefined}
                    label="End number"
                    onChange={(e) => handleChange(e, 'end')}
                    type="number"
                    value={endValue}
                    variant="outlined"
                />
            </Grid>
        </Grid>
        <Grid container item spacing={3}>
            <Grid item>
                <Button
                    variant="contained"
                    onClick={handleGenerate}
                    disabled={areValuesInvalid || (!repeat && endValue === randomNumberList.length)}>
                    Generate
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    onClick={handleReset}
                    disabled={!(randomNumber || randomNumberList)}>
                    Reset
                </Button>
            </Grid>
        </Grid>
        {(repeat ? randomNumber : randomNumberList.length) &&
            <Grid item>
                <Typography variant='body1'>
                    {repeat ? `Generated number is ${randomNumber}` : `Generated numbers are ${randomNumberList.join(', ')}`}
                </Typography>
            </Grid>
        }
        {!repeat && endValue === randomNumberList.length ?
            <Grid item>
                <Typography variant="h5" marginBottom={2}>
                    All numbers are generated
                </Typography>
            </Grid>
            : null
        }
    </Grid>
}