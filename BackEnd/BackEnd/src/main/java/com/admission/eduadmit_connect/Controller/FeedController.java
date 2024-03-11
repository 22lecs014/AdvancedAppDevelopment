package com.admission.eduadmit_connect.Controller;

import com.admission.eduadmit_connect.Model.Feedback;
import com.admission.eduadmit_connect.Service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feed")
@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = "*")
public class FeedController {

    @Autowired
    private FeedService FeedService;

    @GetMapping("/allfeed")
    public List<Feedback> getAllFeed() {
        return FeedService.getAllFeed();
    }

    @PostMapping("/addfeed")
    public Feedback createFeed(@RequestBody Feedback Feed) {
        return FeedService.createFeed(Feed);
    }

    @PutMapping("/updatefeed/{id}")
    public Feedback updateFeed(@PathVariable Long id, @RequestBody Feedback updatedFeed) {
        return FeedService.updateFeed(id, updatedFeed);
    }

    @DeleteMapping("/deletefeed/{id}")
    public void deleteFeed(@PathVariable Long id) {
        FeedService.deleteFeed(id);
    }
}