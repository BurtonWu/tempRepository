using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace HtmlFinder
{
    public class Program
    {
        public const String DOM0 = "<div";
        public const String DOM1 = "</div>";
        public const String CLASS = "class";
        public static Dictionary<String, Int32> _domCount;
        static void Main(string[] args)
        {
            using (WebClient client = new WebClient())
            {
                //Init
                String htmlCode = client.DownloadString("http://www.cutestpaw.com/");
                _domCount = new Dictionary<String, Int32>();

                //Prevent StackOverFlowException if recursion is used on other cases
                int temp = parse(htmlCode);
                while(temp < htmlCode.Length - DOM1.Length)
                    temp = parse(htmlCode, temp);

                //Sort and print
                var sortedDom = _domCount.OrderByDescending(x => x.Value).ToArray();
                var MostOccured = DOM0 + " class=\"" + sortedDom[0].Key + "...\">" + "..."+DOM1;
                Console.WriteLine(MostOccured);
                Console.ReadLine();
            }
        }
        public static Int32 parse(String htmlCode, Int32 index = 0)
        {
            //'<div'
            if(htmlCode.Substring(index, DOM0.Length).CompareTo(DOM0) == 0)
            {
                index++;
                //look for '>'
                while (htmlCode[index] != '>')
                {
                    //look for 'class'
                    if(htmlCode.Substring(index, CLASS.Length).CompareTo(CLASS) == 0)
                    {

                        //pass 'class="'
                        index += CLASS.Length + 2;
                        //concat class value
                        String classValue = "";
                        while(htmlCode[index] != '"')
                        {
                            classValue += htmlCode[index];
                            index++;
                        }
                        //Update Dictionary
                        if (_domCount.ContainsKey(classValue))
                            _domCount[classValue]++;
                        else
                            _domCount.Add(classValue, 1);
                    }
                    index++;
                }
                //'>'
                index++;
                if (index < htmlCode.Length)
                {
                    parse(htmlCode, index);
                }
            }
            //other
            index++;
            return index;
           }
    }
}
