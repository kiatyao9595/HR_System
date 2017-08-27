using System;
using System.IO;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
class Program
{
    public static void Main(string[] args)
        {
            string r = @"D:\test";
            string d = @"C:\Users\Asus\Desktop\test";
            r= @"\\220.20.10.88\d$\H2H_MMPC\MMPC_OUT\" + DateTime.Now.ToString("MMM-yyyy") + @"\" + DateTime.Now.ToString("dd-MMM");
            d= @"D:\MGCT\save\f1_in";
            Console.WriteLine("File moved : "+ transfer(r,d));
            Console.WriteLine("Press enter to exit!");
            //Console.ReadLine();
        }


        public static int transfer(string rootPath, string destPath){
            int i = 0;
            try{
                string[] fileList = System.IO.Directory.GetFiles(rootPath);
                foreach (string file in fileList)
                {
                    string fileToMove = Path.Combine(rootPath, System.IO.Path.GetFileName(file));
                    string moveTo = Path.Combine(destPath, System.IO.Path.GetFileName(file));
                    //moving file
                    if (!File.Exists(moveTo)) {
                        File.Move(fileToMove, moveTo);
                        i++;
                        LogFile("Moved File to : " + moveTo);
                    }
                }
                if(i==0){
                    LogFile("No file moved");
                }
            }catch (Exception ex) {
                LogFile(ex.Message);
            }
            return i;
        }

        public static void LogFile(string sEventName)
        {
            StreamWriter log;

            if (!File.Exists(@"D:\logfile.txt"))
            {
                log = new StreamWriter(@"D:\logfile.txt");
            }
            else
            {
                log = File.AppendText(@"D:\logfile.txt");
            }
            // Write to the file:
            log.WriteLine("-----------------------------------");
            log.WriteLine("Data Time: " + DateTime.Now);
            log.WriteLine("Event Name : " + sEventName);
            log.WriteLine("-----------------------------------");
            // Close the stream:
            log.Close();
        }
}