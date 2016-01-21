using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WhiteBoard.API.Models
{
    public class WhiteBoardController : ApiController       {
        [HttpGet]
        public IEnumerable<drugForm> GetDrugForms() {
            var drugForms = new List<drugForm> {
            new drugForm {id=1, name="tablet",      selected=false, displayOrder=130},
            new drugForm {id=2, name="Capsule",     selected=false, displayOrder=20},
            new drugForm {id=3, name="Drop",        selected=false, displayOrder=50},
            new drugForm {id=4, name="Puff",        selected=false, displayOrder=100},
            new drugForm {id=5, name="Spray",       selected=false, displayOrder=110},
            new drugForm {id=6, name="Suppository", selected=false, displayOrder=120},
            new drugForm {id=7, name="Oral Liquid", selected=false, displayOrder=90},
            new drugForm {id=8, name="Chew Tab",    selected=false, displayOrder=30},
            new drugForm {id=9, name="Oral Dissolving Tab", selected=false, displayOrder=80},
            new drugForm {id=10, name="Cream",       selected=false, displayOrder=40},
            new drugForm {id=11, name="Ointment",    selected=false, displayOrder=70},
            new drugForm {id=12, name="Topical Solution", selected=false, displayOrder=140},
            new drugForm {id=13, name="Granules", selected=false, displayOrder=60},
            new drugForm {id=26, name="Aerosolized Liquid", selected=false, displayOrder=10},
            new drugForm {id=27, name="Dry Powder", selected=false, displayOrder=150},
            new drugForm {id=29, name="aerochamber", selected=false, displayOrder=10},
            new drugForm {id=30, name="test", selected=false, displayOrder=23}
            };

            return drugForms;
        }
    }
}
