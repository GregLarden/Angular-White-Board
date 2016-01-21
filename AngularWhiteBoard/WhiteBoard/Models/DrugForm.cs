using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhiteBoard.API.Models {
    public class drugForm {
        public int id { get; set; }
        public string name { get; set; }
        public bool selected { get; set; }
        public int displayOrder { get; set; }

    }
}