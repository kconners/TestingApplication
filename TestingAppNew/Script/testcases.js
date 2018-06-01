function NavToJira() {
    document.getElementById("ContentJiraAdd").style.display = "block";
    document.getElementById("ContentWorkFlowAdd").style.display = "none";
    document.getElementById("ContentJustAdd").style.display = "none";
}
function NavToWorkFlow() {
    document.getElementById("ContentJiraAdd").style.display = "none";
    document.getElementById("ContentWorkFlowAdd").style.display = "block";
    document.getElementById("ContentJustAdd").style.display = "none";
}
function NavToTestCase() {
    document.getElementById("ContentJiraAdd").style.display = "none";
    document.getElementById("ContentWorkFlowAdd").style.display = "none";
    document.getElementById("ContentJustAdd").style.display = "block";
}