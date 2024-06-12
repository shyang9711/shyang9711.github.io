import React, { useState } from 'react';
import { Box, Link, Typography, Button, Accordion, AccordionDetails, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTheme } from '@mui/material';

const Academics = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState({
    cs1891: false,
    cs1861: false,
    cs170: false,
    cs1611: false,
    cogsci1311: false,
    eecs127: false,
    cs701: false,
    cs61c1: false,
    cs61c2: false,
    cs61b1: false,
    cs61b2: false,
    cs61a1: false,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ src: '', caption: '', description: '' });

  const handleToggle = (projectKey) => {
    setExpanded((prevState) => ({
      ...prevState,
      [projectKey]: !prevState[projectKey],
    }));
  };

  const handleOpenDialog = (src, caption, description) => {
    setDialogContent({ src, caption, description });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const courses = [
    {
      name: 'CS189: Introduction to Machine Learning',
      link: 'https://people.eecs.berkeley.edu/~jrs/189/',
      key: 'cs189',
      projects: [
        { 
          name: 'k-NN', 
          skill: ['Machine Learning'],
          description: 'Implemented k-Nearest Neighbors to estimate the longitude and latitude of a given query image using other geo-tagged images.',
          pdfUrl: `${process.env.PUBLIC_URL}/academics/CS189/IM2Spain/CS189_hw7_IM2SPAIN.pdf`,
        },
      ],
    },
    {
      name: 'CS186: Introduction to Database Systems',
      link: 'https://cs186berkeley.net/',
      key: 'cs186',
      projects: [

      ],
    },
    {
      name: 'CS170: Efficient Algorithms and Intractable Problems',
      link: 'https://cs170.org/',
      key: 'cs170',
      projects: [],
    },
    {
      name: 'CS161: Computer Security',
      link: 'https://cs161.org/',
      key: 'cs161',
      projects: [

      ],
    },
    {
      name: 'COGSCI131: Computational Models of Cognition',
      link: 'https://classes.berkeley.edu/content/2023-fall-cogsci-c131-001-lec-001',
      key: 'cogsci131',
      projects: [

      ],
    },
    {
      name: 'EECS127: Optimization Models in Engineering',
      link: 'https://inst.eecs.berkeley.edu/~eecs127/',
      key: 'eecs127',
      projects: [],
    },
    {
      name: 'CS70: Discrete Mathematics and Probability Theory',
      link: 'https://www.eecs70.org/',
      key: 'cs70',
      projects: [

      ],
    },
    {
      name: 'CS61C: Machine Structures',
      link: 'https://cs61c.org/',
      key: 'cs61c',
      projects: [
        { name: 'Snek',
          skill: ['C (Programming Language)'],
          description: `Snek is a classic snake game developed in C, where the primary objective is to navigate the snake within a board, avoiding collisions with walls, its own body, or tail while aiming to consume the fruit represented by '*'. The game supports multiple snakes and obstacles, and the world is not necessarily confined to a box shape. The snake's head is indicated by 'W', 'A', 'S', or 'D', depending on the last key pressed, while the tail is marked by 'w', 'a', 's', or 'd'. The body segments are represented by '^', '<', 'v', and '>', denoting their direction. `,
          images: [
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61C/Snek/Snek Eat Before.png`,
              caption: 'Snek Before Eating the Fruit',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61C/Snek/Snek Eat After.png`,
              caption: 'Snek After Eating the Fruit',
              description: `As the snake consumes the fruit, it grows longer, increasing the challenge. Also, a new fruit spawns elsewhere within the world at a randomly chosen location. Players control the snake using the keys 'w', 'a', 's', and 'd' to move up, left, down, and right, respectively.`
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61C/Snek/Snek Death Before.png`,
              caption: 'Snek Before Eating the Fruit',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61C/Snek/Snek Death After.png`,
              caption: 'Snek Before Eating the Fruit',
              description: `If the snake collides with an obstacle or itself, it dies, and the head is shown as 'x'. This project emphasizes efficient memory allocation and deallocation, ensuring optimal performance after each function execution.`,
            },
          ]
        },
        { name: 'Risc-V CPU',
          skill: ['Risc-V', 'Logisim'],
          description: 'Created a CPU using RISC-V instructions in Logisim from scratch. This project involved implementing a 2-stage pipeline and ROM-based control logic. The CPU includes 32 registers and supports 16 instructions, covering arithmetic operations, storing and loading, branching, and jumping. The images below show portions of the work; however, they have been intentionally blurred to prevent possible academic dishonesty.',
          images: [
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61C/CPU/Regfile.png`,
              caption: '32 Registries',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61C/CPU/Control Logic.png`,
              caption: 'Control Logic',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61C/CPU/CPU.png`,
              caption: 'CPU',
            }
          ]
        },
      ],
    },
    {
      name: 'CS61B: Data Structures',
      link: 'https://datastructur.es/',
      key: 'cs61b',
      projects: [
        {
          name: 'Ngram',
          skill: ['Java'],
          description: 'NGram compares word usage trends over time, visualizes data in graphs or text, and displays hyponyms with adjustable parameters.',
          images: [
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/NGram/NGram Comparison.png`,
              caption: 'Comparing Two Words',
              description: `Designed and developed the backend of an NGram tool for exploring the history of word usage in English texts. This tool allows users to compare the usage of words over time by implementing an extended form of a tree map to handle query times efficiently.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/NGram/NGram 1400.png`,
              caption: 'Trend from 1400 to 2020',
              description: `Users can specify a range of years, from a minimum of 1400 to a maximum of 2023, to analyze trends.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/NGram/NGram Text.png`,
              caption: 'Trend in Text Format',
              description: `By default, the tool visualizes data through graphs, but it also offers the option to display results in text format.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/NGram/NGram Hyponym.png`,
              caption: 'Hyponyms',
              description: `By default, the tool visualizes data through graphs, but it also offers the option to display results in text format.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/NGram/NGram Hyponym K.png`,
              caption: 'K Most Popular Hyponyms',
              description: `Additionally, the tool features the ability to show hyponyms of given queries, with users having the option to specify the maximum number of hyponyms (k) to display. If k is not specified, all hyponyms are listed. If specified and k is less than the total number of hyponyms, the tool outputs the k most popular hyponyms within the given time period.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/NGram/NGram Hyponym Words.png`,
              caption: 'List of Common Hyponyms',
              description: `Users can also list queries to find common hyponyms between different words.`,
            },
          ]
        },
        { 
          name: 'BYOW', 
          skill: ['Java'],
          description: 'BYOW constructs an intricate, explorable world in which the protagonist navigates through a network of interconnected rooms and hallways, each uniquely generated by a distinct seed. The primary objective is to discover a path leading to the locked door.',
          images: [
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW Main.png`,
              caption: 'Main page',
              description: `The main menu presents a variety of options including starting a new game, loading a previously saved game, replaying the current game, changing the avatar's name, and exiting the game.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW Seed.png`,
              caption: 'Seed page',
              description: 'Players can input any integer as a seed number to procedurally generate a unique world.',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW Gameplay.png`,
              caption: 'Gameplay',
              description: `The procedurally generated world features a variety of rooms and hallways of varying sizes and quantities, interconnected to form a complex maze. Players navigate their character, represented by the '@' symbol, through these spaces, adhering to the restriction of not traversing the walls denoted by '#'.`
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW HUD.png`,
              caption: 'HUD',
              description: 'The Heads-Up Display (HUD), on the top-left corner of the game, dynamically indicates the nature of the object or area at which the player’s mouse is pointing, identifying characters, walls, locked doors, void spaces, and explorable floors.',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW Ending.png`,
              caption: 'Ending',
              description: 'Upon reaching the locked door, the player triumphs, at which point any key press will return them to the main menu.',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW Replay.gif`,
              caption: 'Replay',
              description: 'Players have the option to replay their previous game at any time, irrespective of whether they completed it.',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW Change Name.png`,
              caption: `Original Avatar's Name`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW New Name.png`,
              caption: `Changing Avatar's Name`,
              description: `Players can personalize their experience by changing the avatar's name.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW Original Name Gameplay.png`,
              caption: 'Original Name',
              description: 'Before changing the name of the character, when pointing at the character, HUD displays the "you".',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61B/BYOW/CS61B BYOW New Name Gameplay.png`,
              caption: 'Image 9 Caption',
              description: `After changing character's name, when the player points at the character, the HUD will display the newly assigned name.`,
            },
          ],
        },
      ],
    },
    {
      name: 'CS61A: Structure and Interpretation of Computer Programs',
      link: 'https://cs61a.org/',
      key: 'cs61a',
      projects: [
        {
          name: 'Cats',
          skill: ['Python'],
          description: `Cats is a typing game that measures real-time accuracy and speed, supports topic-specific paragraphs, includes an auto-correct feature, and allows multiplayer competition with word-specific timestamps.`,
          images: [
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Cats/CATS Home.png`,
              caption: 'Cats Main',
              description: `Cats is a typing game where players type a given paragraph as accurately and quickly as possible. Users can specify the paragraph topic by typing in word or list of words.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Cats/CATS End.png`,
              caption: 'Cats Gameplay',
              description: `The program calculates real-time accuracy rates and words-per-minute.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Cats/CATS Autocorrect.png`,
              caption: 'Cats Auto-correct Enabled',
              description: `The auto-correct feature helps by suggesting the closest correct word for slight mistakes.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Cats/CATS Leaderboard.png`,
              caption: 'Cats Leaderboard',
              description: `The game also supports multiplayer mode, allowing players to compete against each other, and track performance on a leaderboard. It records the timestamp of each word typed, identifying the fastest word typed by each player.`,
            },
          ]
        },
        {
          name: 'Ants',
          skill: ['Python'],
          description: `Ants Vs. Some Bees is a tower defense game where bees enter the ant colony each turn, ants are placed for defense, and all insects then act individually; bees move or sting while ants perform actions based on their type. The player loses if a bee reaches the tunnel's end or the QueenAnt is destroyed, and wins if all bees are defeated.`,
          images: [
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Ants/Ants Main.png`,
              caption: 'Ants Main',
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Ants/Ants Gameplay.png`,
              caption: 'Ants Gameplay',
              description: `Users select ants based on their unique food costs to place in the tunnel, which is made up of linked places. Placing a HarvesterAnt in the tunnel allows users to gain additional food.`,
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Ants/Ants Characters.png`,
              caption: 'Ants Characters',
              description: `Each ant belongs to a different class, determining its abilities, food cost, and health. For example, the ThrowerAnt deals long-distance damage, the FireAnt inflicts damage when attacked, and other classes include WallAnt, HungryAnt, BodyguardAnt, TankAnt, and QueenAnt.`,
              link: "https://cs61a.org/proj/ants/",
            },
            {
              src: `${process.env.PUBLIC_URL}/academics/CS61A/Ants/Ants Water.png`,
              caption: 'Ants Water',
              description: `Additionally, users can add water terrain to the map, which only the ScubaThrower class can traverse without being affected.`,
            },
          ]
        }
      ],
    },
  ];


  return (
    <Box>
      <h2>Academics</h2>
      <h3>Education</h3>
      <Typography variant="body1">University of California, Berkeley</Typography>
      <Typography variant="body1">
        <Link
          href="https://cdss.berkeley.edu/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: theme.palette.text.primary }}
        >
          ˑ Computer Science
        </Link>
      </Typography>
      <Typography variant="body1">
        <Link
          href="https://filmmedia.berkeley.edu/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: theme.palette.text.primary }}
        >
          ˑ Film and Media Studies
        </Link>
      </Typography>
      <h3>Courseworks</h3>
      {courses.map((course) => (
        <Box key={course.key}>
          <Typography variant="body1">
            <Link
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: theme.palette.text.primary }}
            >
              {course.name}
            </Link>
            {course.projects.map((project, index) => (
              <Button
                key={index}
                onClick={() => handleToggle(`${course.key}${index + 1}`)}
                sx={{ 
                  marginLeft: '25px',
                  color: theme.palette.buttonText,
                  backgroundColor: theme.palette.buttonBackground,
                }}
              >
                {project.name}
              </Button>
            ))}
          </Typography>
          {course.projects.map((project, index) =>
            expanded[`${course.key}${index + 1}`] ? (
              <Accordion
                key={index}
                expanded={expanded[`${course.key}${index + 1}`]}
                onChange={() => handleToggle(`${course.key}${index + 1}`)}
              >
                <AccordionDetails>
                  <Typography variant="body1" style={{ fontWeight: 'bold', margin: 20 }}>
                    Skills: {project.skill.join(', ')}
                  </Typography>
                  <Typography>
                    {project.description}
                    {project.pdfUrl && (
                      <Box sx={{ marginTop: 2 }}>
                        <iframe
                          src={project.pdfUrl}
                          width="100%"
                          height="500px"
                          style={{ border: 'none' }}
                          title={`${project.name} Report`}
                        />
                      </Box>
                    )}
                    {project.images && (
                      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 2, gap: 2 }}>
                        {project.images.map((image, index) => (
                          <Box key={index} sx={{ marginBottom: 2 }}>
                            <img
                              src={image.src}
                              alt={`CS61B Project 2 Image ${index + 1}`}
                              loading="lazy"
                              onClick={() => handleOpenDialog(image.src, image.caption, image.description)}
                              style={{ cursor: 'pointer',  
                                display: 'block',
                                margin: '0 auto',
                                height: 'auto',
                                width: '100%',
                                maxWidth: ['Snek', ].includes(project.name) ? '200px' : ['Ants', 'Cats', 'Ngram', 'Risc-V CPU'].includes(project.name)? '500px': 'none' }}
                            />
                            <Typography variant="body1">{image.description}</Typography>
                            {image.link && (
                              <Typography variant="body1">
                              More information can be found at{' '}
                              <Link
                              href={image.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              underline="hover"
                              sx={{ color: theme.palette.text.primary }}
                              >
                                {image.link}
                              </Link>.
                              </Typography>
                            )}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ) : null
          )}
        </Box>
      ))}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{dialogContent.caption}</DialogTitle>
        <DialogContent>
          <img
            src={dialogContent.src}
            alt={dialogContent.caption}
            style={{ width: '100%', 
              height: 'auto',}}
          />
          <DialogContentText
            style={{
              color: theme.palette.descriptionText,}}
          >
            {dialogContent.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Academics;