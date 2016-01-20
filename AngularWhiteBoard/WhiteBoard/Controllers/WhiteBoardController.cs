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
        public IEnumerable<DrugForm> GetDrugForms() {
            var drugForms = new List<DrugForm> {
            new DrugForm {Id=1, Name="tablet", Selected=false, DisplayOrder=130},
            new DrugForm {Id=2, Name="Capsule", Selected=false, DisplayOrder=20},
            new DrugForm {Id=3, Name="Drop", Selected=false, DisplayOrder=50},
            new DrugForm {Id=4, Name="Puff", Selected=false, DisplayOrder=100},
            new DrugForm {Id=5, Name="Spray", Selected=false, DisplayOrder=110},
            new DrugForm {Id=6, Name="Suppository", Selected=false, DisplayOrder=120},
            new DrugForm {Id=7, Name="Oral Liquid", Selected=false, DisplayOrder=90},
            new DrugForm {Id=8, Name="Chew Tab", Selected=false, DisplayOrder=30},
            new DrugForm {Id=9, Name="Oral Dissolving Tab", Selected=false, DisplayOrder=80},
            new DrugForm {Id=10, Name="Cream", Selected=false, DisplayOrder=40},
            new DrugForm {Id=11, Name="Ointment", Selected=false, DisplayOrder=70},
            new DrugForm {Id=12, Name="Topical Solution", Selected=false, DisplayOrder=140},
            new DrugForm {Id=13, Name="Granules", Selected=false, DisplayOrder=60},
            new DrugForm {Id=26, Name="Aerosolized Liquid", Selected=false, DisplayOrder=10},
            new DrugForm {Id=27, Name="Dry Powder", Selected=false, DisplayOrder=150},
            new DrugForm {Id=29, Name="aerochamber", Selected=false, DisplayOrder=10},
            new DrugForm {Id=30, Name="test", Selected=false, DisplayOrder=23}
            };

            return drugForms;
        }
    }
}
