using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AntGrid
{
    class ant
    {
        public const Int32 MAXMOVES = 1018;
        //trail and error, no mathematical analysis to determine this.
        public const Int32 MAXDIMENSION = 25;
        public const Int32 WHITE = 0;
        public const Int32 BLACK = 1;
        static void Main(string[] args)
        {
            //Initalize Grid
            Int32[,] grid = new Int32[MAXDIMENSION,MAXDIMENSION];
            for(int i = 0; i < MAXDIMENSION; i++)
            {
                for(int j = 0; j < MAXDIMENSION; j++)
                {
                    grid[i,j] = WHITE;
                }
            }

            //centeralize starting point
            Int32 x = MAXDIMENSION / 2;
            Int32 y = MAXDIMENSION / 2;
            Int32 totalMoves = 0;
            Char direction = 'N';

            while(totalMoves <= MAXMOVES)
            {
                if(grid[x,y] == WHITE)
                {
                    grid[x, y] = BLACK;
                    moveAnt(ref x, ref y, ref direction, WHITE);
                }
                else if(grid[x,y] == BLACK)
                {
                    grid[x, y] = WHITE;
                    moveAnt(ref x, ref y, ref direction, BLACK);
                }
                totalMoves++;
            }

            //Count Black Squares
            Int32 blackSquareCount = 0;
            for (int i = 0; i < MAXDIMENSION; i++)
            {
                for (int j = 0; j < MAXDIMENSION; j++)
                {
                    if (grid[i, j] == BLACK)
                        blackSquareCount++;
                }
            }
            Console.WriteLine("BlackSquares: " + blackSquareCount);
            Console.ReadLine();
        }

        static void moveAnt(ref Int32 x, ref Int32 y, ref Char direction, Int32 squareColor)
        {
            switch(direction)
            {
                case 'N':
                    if(squareColor == WHITE)
                    {
                        direction = 'E';
                        x++;
                    }
                    else if (squareColor == BLACK)
                    {
                        direction = 'W';
                        x--;
                    }
                    break;
                case 'E':
                    if (squareColor == WHITE)
                    {
                        direction = 'S';
                        y++;
                    }
                    else if (squareColor == BLACK)
                    {
                        direction = 'N';
                        y--;
                    }
                    break;
                case 'W':
                    if (squareColor == WHITE)
                    {
                        direction = 'N';
                        y--;
                    }
                    else if (squareColor == BLACK)
                    {
                        direction = 'S';
                        y++;
                    }
                    break;
                case 'S':
                    if (squareColor == WHITE)
                    {
                        direction = 'W';
                        x--;
                    }
                    else if (squareColor == BLACK)
                    {
                        direction = 'E';
                        x++;
                    }
                    break;

            }
        }
    }
}
