# Introduction

Solution for the Mars Rover coding problem. 

## Requirements
1. The world should be modelled as a grid with size m x n
1. Your program should read the input, update the robots, and print out the final states of the robots
1. Each robot has a position (x, y), and an orientation (N, E, S, W)
1. Each robot can move forward one space (F), rotate left by 90 degrees (L), or rotate right by 90 degrees (R)
1. If a robot moves off the grid, it is marked as ‘lost’ and its last valid grid position and orientation is recorded
1. Going from x->x+1 is in the easterly direction,and y->y+1 is in the northerly direction. i.e. (0, 0) represents the south-west corner of the grid
1. The input takes the form:
    ```
    4 8
    (2, 3, E) LFRFF
    (0, 2, N) FFLFRFF
    ```
    The first line of the input ‘4 8’ specifies the size of the grid. The subsequent lines each represent the initial state and commands for a single robot. (0, 2, N) specifies the initial state of the form (x, y, orientation). FFLFRFF represents the sequence of movement commands for the robot.
1. The output should take the form:
    ```
    (4, 4, E)
    (0, 4, W) LOST
    ```
    Each line represents the final position and orientation of the robots of the form (x, y, orientation) and optionally whether the robot was lost.

# Assumptions
1. The first number for the grid specifies the width (x) and the second number of the grid specifies the height (y).
1. The grid is 0-indexed. For example, in a 4x4 grid, a rover can be at (0,0) but not (4,4). The max position would be (3,3).
1. Multiple rovers do not affect each other. For example, there can be multiple rovers in the same space.


# Setup

## Installation
```
node install
```

## Run
```
npm start
```

## Run tests
```
# Run all tests
npm test 

# Rerun tests for changed files
npm run test -- --watch
```
