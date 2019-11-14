
package classes;


public class Pqrs {
    private int id;
    private String description;
    private String datePqrs;
    private String evidence;
    private String CUN;
    private int idClient;
    private String type;
    private String answer;

    public Pqrs() {
    }

    public Pqrs(int id, String description, String datePqrs, String evidence, String CUN, int idClient, String type, String answer) {
        this.id = id;
        this.description = description;
        this.datePqrs = datePqrs;
        this.evidence = evidence;
        this.CUN = CUN;
        this.idClient = idClient;
        this.type = type;
        this.answer = answer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDatePqrs() {
        return datePqrs;
    }

    public void setDatePqrs(String datePqrs) {
        this.datePqrs = datePqrs;
    }

    public String getEvidence() {
        return evidence;
    }

    public void setEvidence(String evidence) {
        this.evidence = evidence;
    }

    public String getCUN() {
        return CUN;
    }

    public void setCUN(String CUN) {
        this.CUN = CUN;
    }

    public int getIdClient() {
        return idClient;
    }

    public void setIdClient(int idClient) {
        this.idClient = idClient;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

  
    
    
}
