using System;
using System.IO;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
class Program
{
    public static void Main(string[] args)
        {
            if(DateTime.Now.ToString("dd") == "08" || DateTime.Now.ToString("dd") == "08"){
                Console.WriteLine(deletelog());
            }
            Console.WriteLine("Press enter to exit!");
            //Console.ReadLine();
        }     

        public static bool deletelog(){
            bool done = false;
            if(File.Exists(@"D:\logfile.txt"))
            {
                File.Delete(@"D:\logfile.txt");
                Console.WriteLine("Log file deleted");
                done = true;
            }else{
                Console.WriteLine("Log file not found");
                done= false;
            }
            return done;
        }
        
}