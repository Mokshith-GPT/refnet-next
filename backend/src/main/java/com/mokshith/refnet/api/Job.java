package com.mokshith.refnet.api;

import jakarta.validation.constraints.NotBlank;

public record Job(Long id, @NotBlank String title, @NotBlank String company, @NotBlank String location, String description) {}
