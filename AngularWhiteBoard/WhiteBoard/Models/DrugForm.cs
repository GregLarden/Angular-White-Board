using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhiteBoard.API.Models {
    public class DrugForm {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Selected { get; set; }
        public int DisplayOrder { get; set; }

    }
}