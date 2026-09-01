package com.mokshith.refnet.api;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/v1/jobs")
public class JobController {
  private final AtomicLong ids = new AtomicLong(0);
  private final List<Job> jobs = new CopyOnWriteArrayList<>();

  @GetMapping
  public List<Job> list() { return List.copyOf(jobs); }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Job create(@Valid @RequestBody Job input) {
    Job saved = new Job(ids.incrementAndGet(), input.title(), input.company(), input.location(), input.description());
    jobs.add(saved);
    return saved;
  }
}
