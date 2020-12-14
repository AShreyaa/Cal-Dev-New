package com.personal.calendar.service;


import com.personal.calendar.bean.UserCalendar;
import com.personal.calendar.repository.CalendarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CalendarService {
    @Autowired
    private CalendarRepository calRepos;

    public void save(UserCalendar cal) {
        calRepos.save(cal);
    }

    public Optional<UserCalendar> findById(UserCalendar.Title title) {
        return calRepos.findById(title);
    }

    public  ArrayList<UserCalendar> findByAccount(String account){
        return  calRepos.findByTitleAccountIgnoreCase(account);
    }

    public ArrayList<UserCalendar> findByArchive(boolean archive,String account) {
        return calRepos.findByArchiveAndTitleAccountIgnoreCase(archive,account);
    }

    public ArrayList<UserCalendar> findByType(String type,String account,Boolean archive) {
        return calRepos.findByArchiveAndTitleTypeAndTitleAccountIgnoreCase(archive,type,account);
    }

    public ArrayList<UserCalendar> findByTags(String tag,String account) {
        return calRepos.findByTagsAndTitleAccountIgnoreCase(tag,account);
    }

    public ArrayList<UserCalendar> findByTitle(String title,String account) {

        return calRepos.findByTitleTitleAndTitleAccountIgnoreCase(title,account);
    }

    public ArrayList<UserCalendar> findByTargetDateAndType(String date,String type,String account) {
        return calRepos.findByTargetDateAndTitleTypeAndTitleAccountIgnoreCase(date,type,account);
    }
}