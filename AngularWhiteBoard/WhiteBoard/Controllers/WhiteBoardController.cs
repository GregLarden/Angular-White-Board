using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WhiteBoard.API.Models {
    public class WhiteBoardController : ApiController {

        [HttpGet]
        public IEnumerable<drugFormAction> GetDrugFormActions() {
            var actions = new List<drugFormAction>();
            actions.Add(
                    new drugFormAction() { id = 0, name = "Select an action", displayOrder =1 }
                    );

            for(int idx = 1; idx < 20; idx++) {
                actions.Add(
                    new drugFormAction() { id = idx, name = "Action" + idx.ToString(), displayOrder = idx * 10 }
                    );
            }
            return actions;

        }

        [HttpGet]
        public IEnumerable<drugForm> GetDrugForms() {
            var drugForms = new List<drugForm> {
            new drugForm {id=1, name="Select Drug From",      selected=false, actions=new List<drugFormAction>(), displayOrder=0},
            new drugForm {id=1, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=2, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=3, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=4, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=5, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=6, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=7, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=8, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=9, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=10, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=11, name="Ointment",    selected=false, actions=new List<drugFormAction>(), displayOrder=70},
            new drugForm {id=12, name="Topical Solution", selected=false, actions=new List<drugFormAction>(), displayOrder=140},
            new drugForm {id=13, name="Granules", selected=false, actions=new List<drugFormAction>(), displayOrder=60},
            new drugForm {id=14, name="Aerosolized Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=10},
            new drugForm {id=15, name="Dry Powder", selected=false, actions=new List<drugFormAction>(), displayOrder=150},
            new drugForm {id=16, name="aerochamber", selected=false, actions=new List<drugFormAction>(), displayOrder=10},
            new drugForm {id=17, name="test", selected=false, actions=new List<drugFormAction>(), displayOrder=23}
            };

            AddDrugFormActions(drugForms[1], 3);
            AddDrugFormActions(drugForms[5], 6);
            AddDrugFormActions(drugForms[16], 10);

            return drugForms;
        }

        private void AddDrugFormActions(drugForm drugForm, int actionCount) {
            for(int idx = 0; idx < actionCount; idx++) {
                drugForm.actions.Add(
                    new drugFormAction() { id = idx, name = "Action" + idx.ToString(), displayOrder = idx * 10 }
                    );

            }
        }
    }
}
