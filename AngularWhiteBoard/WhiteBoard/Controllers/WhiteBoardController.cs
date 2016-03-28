using System.Collections.Generic;
using System.Web.Http;

namespace WhiteBoard.API.Models {
    public class Filter {
        public int Start { get; set; }
        public int End { get; set; }
    }
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
        public IEnumerable<drugForm> GetDrugForms([FromUri]Filter filter) {
            var drugForms = new List<drugForm> {
            new drugForm {id=0, name="Select Drug From",      selected=false, actions=new List<drugFormAction>(), displayOrder=0},
            new drugForm {id=1, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=2, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=3, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=4, name="Puff True",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
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
            new drugForm {id=17, name="test", selected=false, actions=new List<drugFormAction>(), displayOrder=23},
            new drugForm {id=18, name="Select Drug From",      selected=false, actions=new List<drugFormAction>(), displayOrder=0},
            new drugForm {id=19, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=20, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=21, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=22, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=23, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=24, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=25, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=26, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=27, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=28, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=29, name="Ointment",    selected=false, actions=new List<drugFormAction>(), displayOrder=70},
            new drugForm {id=30, name="Topical Solution", selected=false, actions=new List<drugFormAction>(), displayOrder=140},
            new drugForm {id=31, name="Granules", selected=false, actions=new List<drugFormAction>(), displayOrder=60},
            new drugForm {id=32, name="Aerosolized Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=10},
            new drugForm {id=33, name="Dry Powder", selected=false, actions=new List<drugFormAction>(), displayOrder=150},
            new drugForm {id=34, name="aerochamber", selected=false, actions=new List<drugFormAction>(), displayOrder=10},
            new drugForm {id=35, name="test", selected=false, actions=new List<drugFormAction>(), displayOrder=23} ,
            new drugForm {id=36, name="Select Drug From",      selected=false, actions=new List<drugFormAction>(), displayOrder=0},
            new drugForm {id=37, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=38, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=39, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=40, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=41, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=42, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=43, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=44, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=45, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=46, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=47, name="Ointment",    selected=false, actions=new List<drugFormAction>(), displayOrder=70},
            new drugForm {id=48, name="Topical Solution", selected=false, actions=new List<drugFormAction>(), displayOrder=140},
            new drugForm {id=49, name="Granules", selected=false, actions=new List<drugFormAction>(), displayOrder=60},
            new drugForm {id=50, name="Aerosolized Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=10},
            new drugForm {id=51, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=52, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=53, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=54, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=55, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=56, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=57, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=58, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=59, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=60, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},           
            new drugForm {id=61, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=62, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=63, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=64, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=65, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=66, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=67, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=68, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=69, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=70, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=71, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=72, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=73, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=74, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=75, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=76, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=77, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=78, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=79, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=80, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},            
            new drugForm {id=81, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=82, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=83, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=84, name="Puff",        selected=true, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=85, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=86, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=87, name="Oral Liquid", selected=true, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=88, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=89, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=90, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40}   ,
            new drugForm {id=90, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=91, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=92, name="Capsule",     selected=true, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=93, name="Drop",        selected=true, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=94, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=95, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=96, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=97, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=98, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=99, name="Oral Dissolving Tab", selected=true, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=100, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=101, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=102, name="Capsule",     selected=true, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=103, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=104, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=105, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=106, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=107, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=108, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=109, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=110, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=111, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=112, name="Capsule",     selected=true, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=113, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=114, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=115, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=116, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=117, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=118, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=119, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=120, name="Cream",       selected=true, actions=new List<drugFormAction>(), displayOrder=40},           
            new drugForm {id=121, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=122, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=123, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=124, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=125, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=126, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=127, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=128, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=129, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=130, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=131, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=132, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=133, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=134, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=135, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=136, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=137, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=138, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=139, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=140, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=141, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=142, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=143, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=144, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=145, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=146, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=147, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=148, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=149, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=150, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40},
            new drugForm {id=151, name="tablet",      selected=false, actions=new List<drugFormAction>(), displayOrder=130},
            new drugForm {id=152, name="Capsule",     selected=false, actions=new List<drugFormAction>(), displayOrder=20},
            new drugForm {id=153, name="Drop",        selected=false, actions=new List<drugFormAction>(), displayOrder=50},
            new drugForm {id=154, name="Puff",        selected=false, actions=new List<drugFormAction>(), displayOrder=100},
            new drugForm {id=155, name="Spray",       selected=false, actions=new List<drugFormAction>(), displayOrder=110},
            new drugForm {id=156, name="Suppository", selected=false, actions=new List<drugFormAction>(), displayOrder=120},
            new drugForm {id=157, name="Oral Liquid", selected=false, actions=new List<drugFormAction>(), displayOrder=90},
            new drugForm {id=158, name="Chew Tab",    selected=false, actions=new List<drugFormAction>(), displayOrder=30},
            new drugForm {id=159, name="Oral Dissolving Tab", selected=false, actions=new List<drugFormAction>(), displayOrder=80},
            new drugForm {id=160, name="Cream",       selected=false, actions=new List<drugFormAction>(), displayOrder=40}
            };

            AddDrugFormActions(drugForms[1], 3);
            AddDrugFormActions(drugForms[5], 6);
            AddDrugFormActions(drugForms[16], 10);

            //var recordCount = filter.End;

            //if(filter.End > drugForms.Count) {
            //    recordCount = drugForms.Count - filter.Start;
            //}
            
            //var results = drugForms.GetRange(filter.Start, filter.End);
            
            return drugForms;


        }

        private void AddDrugFormActions(drugForm drugForm, int actionCount) {
            for(int idx = 0; idx < actionCount; idx++) {
                drugForm.actions.Add(
                    new drugFormAction() { id = idx, name = "Action" + idx.ToString(), displayOrder = idx * 10 }
                    );

            }
        }

        [HttpGet]
        public IEnumerable<availableItem> GetAvailableItemsData() {

            var availableItems = new List<availableItem>();

            for(int idx = 1; idx < 20; idx++) {
                availableItems.Add(
                    new availableItem() { id = idx, name = "Item Option " + idx.ToString(), displayOrder = idx * 10 }
                    );
            }
            return availableItems;

        }
    }
}
