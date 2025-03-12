const x = [
  { title: "Leadership", percent: 90 },
  { title: "Communication", percent: 85 },
  { title: "Technical Project Management", percent: 80 },
  { title: "Decision Making", percent: 75 },
  { title: "Risk Management", percent: 70 },
  { title: "Strategic Planning", percent: 70 },
  { title: "Change Management", percent: 65 },
  { title: "Stakeholder Management", percent: 65 },
  { title: "Business Acumen", percent: 60 },
  { title: "Technical IT Skills", percent: 50 },
];
let y = "";
x.forEach((item) => {
  y += `          <div class="box circle">
            <div class="topic">${item.title}</div>
            <div class="${
              item.percent >= 75 ? "green" : item.percent >= 65 ? "orange" : "red"
            }">
              <div
                class="progress"
                style="
                  background: transparent;
                  --darkreader-inline-bgimage: initial;
                  --darkreader-inline-bgcolor: transparent;
                "
                data-darkreader-inline-bgimage=""
                data-darkreader-inline-bgcolor=""
              >
                <div class="inner">
                  <div class="percent"><span>&nbsp;&nbsp;${
                    item.percent
                  }</span>%</div>
                  <div class="water"></div>
                  <div class="glare"></div>
                </div>
              </div>
            </div>
          </div>`;
});

console.log(y);
