package com.personal.calendar.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

@Document(collection = "Calendar")
public class UserCalendar {
    //composite key changes
    @Id
    Title title;
    String date;
    ArrayList<EditedTimestamp> editedTimestamps;
    String targetDate;
    String targetTime;
    ArrayList<String> tags;
    boolean archive;
    String description;
    String notes;
    ArrayList<String> taskOrList ;
    ArrayList<String> attachmentUrl;


   public static class Title implements Serializable {
        private String title;
        private String type;
        private String account;
        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

       public String getAccount() {
           return account;
       }

       public void setAccount(String account) {
           this.account = account;
       }
   }
    public static class EditedTimestamp implements Serializable{
        Date date;
        String time;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ArrayList<EditedTimestamp> getEditedTimestamps() {
        return editedTimestamps;
    }

    public void setEditedTimestamps(ArrayList<EditedTimestamp> editedTimestamps) {
        this.editedTimestamps = editedTimestamps;
    }

    public String getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(String targetDate) {
        this.targetDate = targetDate;
    }

    public String getTargetTime() {
        return targetTime;
    }

    public void setTargetTime(String targetTime) {
        this.targetTime = targetTime;
    }

    public ArrayList<String> getTags() {
        return tags;
    }

    public void setTags(ArrayList<String> tags) {
        this.tags = tags;
    }

    public ArrayList<String> getAttachmentUrl() {
        return attachmentUrl;
    }

    public void setAttachmentUrl(ArrayList<String> attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
    }

    public boolean isArchive() {
        return archive;
    }

    public void setArchive(boolean archive) {
        this.archive = archive;
    }

    public ArrayList<String> getTaskOrList() {
        return taskOrList;
    }

    public void setTaskOrList(ArrayList<String> taskOrList) {
        this.taskOrList = taskOrList;
    }
}
